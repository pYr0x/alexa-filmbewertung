"use strict";

var Alexa = require('alexa-app');

const CONST = require('./src/const');
const ImdbMenu = require('./src/ImdbMenu');
const imdbMenuFactory = require('./src/util').imdbMenuFactory;

const Movie = require("./src/Movie");
const ImdbAdvancedScrapper = require("./src/provider/ImdbAdvancedScrapper");
const ImdbScrapper = require("./src/provider/ImdbScrapper");
const OMDB = require("./src/provider/Omdb");

const SayMovie = require('./src/SayMovie');

var app = new Alexa.app("imdb");
const IMDB_SESSION_KEY = "imdb_";

// connect the alexa-app to AWS Lambda
module.exports = app;

app.launch(function(request, response) {
	const prompt = 'Nenne mir einen Film und ich sage dir seine Bewertung auf I.M.D.B.';
	response.say(prompt);
  response.reprompt("Ich hab leider nichts gehört. Nenne mir einen Film.");
  response.shouldEndSession(false);
});

app.intent('AMAZON.CancelIntent', {}, cancelIntentFunction);
app.intent('AMAZON.StopIntent', {}, cancelIntentFunction);

// app.intent('AMAZON.NoIntent', {}, cancelIntentFunction);
// app.intent('AMAZON.YesIntent', {}, cancelIntentFunction);

app.intent('AMAZON.HelpIntent', {}, function(request, response) {
    const imdbMenu = imdbMenuFactory(request);
		const help = ImdbMenu.menues[imdbMenu.getCurrentMenu()].help;
    response.say(help).shouldEndSession(false);

    response.response.MENU_TEST = imdbMenu.getCurrentMenu();
  });

app.intent("SearchIntent", {
		"slots": {
			"MOVIE": "MOVIES",
      "YEAR": "AMAZON.FOUR_DIGIT_NUMBER"
		},
		"utterances": [
			"welche Bewertung {-|MOVIE} hat",
			"welche Bewertung {-|MOVIE} {von|aus dem Jahr} {-|YEAR} hat",
			"{|welche Bewertung hat} {-|MOVIE} {von|aus dem Jahr} {-|YEAR}",
			"wie wurde {-|MOVIE} bewertet",
			"wie wurde {-|MOVIE} {von|aus dem Jahr} {-|YEAR} bewertet",
			"wie {-|MOVIE} bewertet wurde",
			"wie {-|MOVIE} {von|aus dem Jahr} {-|YEAR} bewertet wurde",
      "{-|MOVIE}",
      "{-|MOVIE} {von|aus dem Jahr} {-|YEAR}"
		]
	},	function(request, response) {
		const imdbMenu = imdbMenuFactory(request);
		const sayMovie = new SayMovie(request, response, imdbMenu);

    let session = request.getSession();


		const searchedForMovie = request.slot("MOVIE");
		const searchedForYear = request.slot("YEAR");
		console.log(searchedForMovie);
		console.log(searchedForYear);

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
        session.set(IMDB_SESSION_KEY+"movies", movieSession);
        session.set(IMDB_SESSION_KEY+"searchedFor", {
          'movie': searchedForMovie,
          'year': searchedForYear
        });
      }

      // save menu data session
      session.set(IMDB_SESSION_KEY+"menu", imdbMenu.getData());
    }).catch((err) => {

    });

	});

app.intent("ChooseIntent", {
  "slots": {
    "ENUMERATION": "ENUMERATION"
  },
  "utterances": [
	  "{-|ENUMERATION} {|Titel|Film}",
  ]
}, function (request, response) {
  const imdbMenu = imdbMenuFactory(request);
  const sayMovie = new SayMovie(request, response, imdbMenu);

  const enumeration = request.slot("ENUMERATION");

  let moviesSession = request.getSession().get(IMDB_SESSION_KEY+"movies");

  if(moviesSession && moviesSession.length > 0){
    // response.say("Du hast "+enumeration+" gemeint?");

    switch(enumeration){
      case "erster":
      case "eins":
        sayMovie.rating(new Movie(moviesSession[0]));
        break;

      case "zweiter":
      case "zwei":
        sayMovie.rating(new Movie(moviesSession[1]));
        break;

      case "dritter":
      case "drei":
        sayMovie.rating(new Movie(moviesSession[2]));
        break;

      case "vieter":
      case "vier":
        sayMovie.rating(new Movie(moviesSession[3]));
        break;

      case "fünfter":
      case "fünf":
        sayMovie.rating(new Movie(moviesSession[4]));
        break;

      default:
        response.say(ImdbMenu.menues[imdbMenu.getCurrentMenu()]);
        response.shouldEndSession(false);
        break;
    }
  }else{
  	response.say("Nenne mir einen Film und ich sage dir seine Bewertung auf I.M.D.B.");
    response.shouldEndSession(true);
  }

});

app.intent("RepeatIntent", {
  "utterances": [
    "Wiederhole {alle|die} {|Titel|Filme} {nochmal|nochmals}",
	  "{nochmal|nochmals}"
  ]
}, function (request, response) {
  const imdbMenu = imdbMenuFactory(request);
  const sayMovie = new SayMovie(request, response, imdbMenu);

  let moviesSession = request.getSession().get(IMDB_SESSION_KEY+"movies");

  if(moviesSession && moviesSession.length > 0){
    sayMovie.list(moviesSession);
  }else{
    response.say("Nenne mir einen Film und ich sage dir seine Bewertung auf I.M.D.B.");
    response.shouldEndSession(true);
  }
});

app.intent("BackIntent", {
  "utterances": [
    "Zurück",
  ]
}, function () {

});


function cancelIntentFunction(request, response) {
	response.say('astalavista baby!').shouldEndSession(true);
}
