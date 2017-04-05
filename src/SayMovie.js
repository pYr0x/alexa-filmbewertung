"use strict";

const CONST = require('./const');

class SayMovie {
  constructor(request, response, imdbMenu){
    this.request = request;
    this.response = response;
    this.imdbMenu = imdbMenu;

    const searchedFor = this.request.getSession().get(CONST.IMDB_SESSION_KEY+"searchedFor");

    this.searchedForMovie = (searchedFor && searchedFor.movie) ? searchedFor.movie : this.request.slot("MOVIE");
    this.searchedForYear = (searchedFor && searchedFor.year) ? searchedFor.year : this.request.slot("YEAR");

  }

  rating(movie){
    if(this.searchedForYear !== undefined) {
      // response.say("Der Film: " + movie.title + ", aus dem Jahr <say-as interpret-as=\"date\">" + searchedForYear + "</say-as> hat " + movie.rating + " von 10 Sterne");
      this.response.say("Der Film: " + movie.title + ", aus dem Jahr " + this.searchedForYear + " hat " + movie.rating + " von 10 Sterne");
    }else{
      this.response.say("Der Film: " + movie.title + ", hat " + movie.rating + " von 10 Sterne");
    }

    this.imdbMenu.inMenue('movieRating');
    this.response.response.MENU_TEST = this.imdbMenu.getCurrentMenu();
    this.response.shouldEndSession(true);
  }

  list(movies){
    let sayList = [];

    for(let i = 0; i < movies.length; i++){
      sayList.push(CONST.GERMAN_ENUMERATION[i] + ": "+movies[i].title+", aus dem Jahr "+movies[i].releaseYear);
    }

    this.response.say("Ich habe mehrere Filme mit dem Titel: "+this.searchedForMovie+" gefunden. Welchen Film hast du gemeint? "+sayList.join('. ')+". Sage zum Beispiel: Erster Titel.");
    this.response.reprompt("Ich hab leider nichts gehört. Sage zum Beispiel: Erster Titel.");

    this.response.shouldEndSession(false);

    this.imdbMenu.inMenue('movieList');
    this.response.response.MENU_TEST = this.imdbMenu.getCurrentMenu();
  }

}

module.exports = SayMovie;