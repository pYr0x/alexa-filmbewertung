"use strict";

const Alexa = require('alexa-app');

const CONST = require('./src/const');
const Menu = require('./src/Menu');
const menuFactory = require('./src/util').menuFactory;

const Movie = require("./src/Movie");
const ImdbAdvancedScrapper = require("./src/provider/ImdbAdvancedScrapper");
const ImdbScrapper = require("./src/provider/ImdbScrapper");
const OMDB = require("./src/provider/Omdb");

const SayMovie = require('./src/SayMovie');

const app = new Alexa.app("filmbewertung");

// connect the alexa-app to AWS Lambda
module.exports = app;

app.launch(function(request, response) {
	const prompt = 'Nenne mir einen Film und ich sage dir seine Bewertung.';
	response.say(prompt);
  response.reprompt("Ich hab leider nichts gehört. Nenne mir einen Film.");
  response.shouldEndSession(false);
});

app.intent('AMAZON.CancelIntent', {}, cancelIntentFunction);
app.intent('AMAZON.StopIntent', {}, cancelIntentFunction);

// app.intent('AMAZON.NoIntent', {}, cancelIntentFunction);
// app.intent('AMAZON.YesIntent', {}, cancelIntentFunction);

app.intent('AMAZON.HelpIntent', {}, function(request, response) {
    const menu = menuFactory(request);
		const help = Menu.menues[menu.getCurrentMenu()].help;
    response.say(help).shouldEndSession(false);

    response.response.MENU_TEST = menu.getCurrentMenu();
  });

app.intent("SearchIntent", {
		"slots": {
			"MOVIE": "MOVIES",
      "YEAR": "AMAZON.FOUR_DIGIT_NUMBER"
		},
		"utterances": [
			"welche Bewertung {-|MOVIE} hat",
			"welche Bewertung {-|MOVIE} {von|aus dem Jahr} {-|YEAR} hat",
			"{welche Bewertung hat} {-|MOVIE} {von|aus dem Jahr} {-|YEAR}",
			"wie wurde {-|MOVIE} bewertet",
			"wie wurde {-|MOVIE} {von|aus dem Jahr} {-|YEAR} bewertet",
			"wie {-|MOVIE} bewertet wurde",
			"wie {-|MOVIE} {von|aus dem Jahr} {-|YEAR} bewertet wurde",
      "nach {|dem Film} {-|MOVIE}",
      "nach {|dem Film} {-|MOVIE} {|von|aus dem Jahr} {-|YEAR}",
      "{-|MOVIE}",
      "{-|MOVIE} {von|aus dem Jahr} {-|YEAR}",
      "{der|den} {Film|Titel} {-|MOVIE}",
      "{der|den} {Film|Titel} {-|MOVIE} {von|aus dem Jahr} {-|YEAR}"
		]
	},	function(request, response) {
		const menu = menuFactory(request);
		const sayMovie = new SayMovie(request, response, menu);

    let session = request.getSession();


		const searchedForMovie = Movie.normalize(request.slot("MOVIE"));
		const searchedForYear = request.slot("YEAR");
		console.log("movie: "+searchedForMovie);
		console.log("year: "+searchedForYear);

    let moviePromise = new Promise(function (resolve, reject) {

      const imdbas = new ImdbAdvancedScrapper(searchedForMovie, searchedForYear);

      return imdbas.findMovie().then((movies) => {
        console.log(movies);
        resolve(movies);

        // if not found with ImdbAdvancedScrapper
      }).catch(function (err) {

        // go ahead and try to find with ImdbScrapper
        const imdbs = new ImdbScrapper(searchedForMovie, searchedForYear);
        imdbs.findMovie().then((movies) => {
          console.log(movies);
          let omdbPromises = [];
          // loop through all movies and get info about the imdb rating
          movies.forEach((movie, index, object) => {
            const omdb = new OMDB(movie.id);

            omdbPromises.push(omdb.findMovie().then(function(OmdbResponse){
              movie.rating = OmdbResponse.rating;

              // when OMDB has no rating for this movie, remove it
              if(movie.rating === false){
                object.splice(index, 1);
              }

            }).catch((err) => {
              // remove movie which is not found in OMDB
              object.splice(index, 1);
            }));
          });

          // if all omdb requests are resolved
          Promise.all(omdbPromises).then(() => {
            resolve(movies);
          });
        }).catch((err) => {
          console.log(err);
          resolve([]);
        });
      });
    });


    return moviePromise.then(function (movies) {
      // no movie found
      if(movies.length <= 0) {
        response.say("Ich konnte leider keine Bewertung für den Film: "+searchedForMovie+" finden.");
        response.shouldEndSession(true);

      // found one movie, return the result
      }else if (movies.length === 1) {
        let movie = movies.shift();
        // sayRating(movie);
        sayMovie.rating(movie);
        response.response.MOVIE_TEST = movie;

      // found multiple titles
      } else {
        sayMovie.list(movies);

        let movieSession = [];
        movies.forEach(function (movie) {
          movieSession.push(movie.toJSON());
        });

        // save some data into the current session
        session.set(CONST.IMDB_SESSION_KEY+"movies", movieSession);
        session.set(CONST.IMDB_SESSION_KEY+"searchedFor", {
          'movie': searchedForMovie,
          'year': searchedForYear
        });
      }

      // save menu data session
      session.set(CONST.IMDB_SESSION_KEY+"menu", menu.getData());
    }).catch((err) => {

    });

	});

app.intent("ChooseIntent", {
  "slots": {
    "ENUMERATION": "ENUMERATION"
  },
  "utterances": [
	  "{|den} {-|ENUMERATION} {|Titel|Film} {|bitte}",
  ]
}, function (request, response) {
  const menu = menuFactory(request);
  const sayMovie = new SayMovie(request, response, menu);

  const enumeration = request.slot("ENUMERATION");

  let moviesSession = request.getSession().get(CONST.IMDB_SESSION_KEY+"movies");

  let userHasChoosen = false;
  let movieFound = false;

  if(moviesSession && moviesSession.length > 0){
    console.log(enumeration);

    switch(enumeration){
      case "erster":
      case "erstens":
      case "eins":
      case "ersten":
        sayMovie.rating(new Movie(moviesSession[0]));
        userHasChoosen = "ersten";
        movieFound = true;
        break;

      case "zweiter":
      case "zweitens":
      case "zwei":
      case "zweiten":
        if(moviesSession.length >= 2){
          sayMovie.rating(new Movie(moviesSession[1]));
          movieFound = true;
        }
        userHasChoosen = "zweiten";
        break;

      case "dritter":
      case "drittens":
      case "drei":
      case "dritten":
        if(moviesSession.length >= 3) {
          sayMovie.rating(new Movie(moviesSession[2]));
          movieFound = true;
        }
        userHasChoosen = "dritten";
        break;

      case "vierter":
      case "viertens":
      case "vier":
      case "vierten":
        if(moviesSession.length >= 4) {
          sayMovie.rating(new Movie(moviesSession[3]));
          movieFound = true;
        }
        userHasChoosen = "vierten";
        break;

      case "fünfter":
      case "fünftens":
      case "fünf":
      case "fünften":
        if(moviesSession.length >= 5) {
          sayMovie.rating(new Movie(moviesSession[4]));
          movieFound = true;
        }
        userHasChoosen = "fünften";
        break;

      default:
        const help = Menu.menues[menu.getCurrentMenu()].help;
        response.say(help).shouldEndSession(false);
        break;
    }

    if(userHasChoosen !== false && !movieFound){
      // const help = Menu.menues[menu.getCurrentMenu()].help;
      response.say("Ich konnte den "+ userHasChoosen +" Titel nicht finden. Bitte wähle einen anderen Film aus.").shouldEndSession(false);
    }
  }else{
  	response.say("Nenne mir einen Film und ich sage dir seine Bewertung.");
    response.shouldEndSession(false);
  }

});

app.intent("RepeatIntent", {
  "utterances": [
    "Wiederhole {alle|die} {|Titel|Filme} {nochmal|nochmals}",
	  "{nochmal|nochmals}"
  ]
}, function (request, response) {
  const menu = menuFactory(request);
  const sayMovie = new SayMovie(request, response, menu);

  let moviesSession = request.getSession().get(CONST.IMDB_SESSION_KEY+"movies");

  if(moviesSession && moviesSession.length > 0){
    let movieList = [];
    moviesSession.forEach(function (json) {
      movieList.push(new Movie(json));
    });
    sayMovie.list(movieList);
  }else{
    response.say("Nenne mir einen Film und ich sage dir seine Bewertung.");
    response.shouldEndSession(false);
  }
});

function cancelIntentFunction(request, response) {
	response.say('astalavista baby!').shouldEndSession(true);
}
