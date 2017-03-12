"use strict";

class Movie {
  constructor(json) {
    try {
      this.movie = JSON.parse(json);
      this.rating = this.movie.imdbRating;
    }catch (err) {
      throw err;
    }
  }

  found() {
    return Object.keys(this.movie).length > 0 && this.movie.Response.toLowerCase() === "true";
  }

  get rating() {
    return (this.movie.imdbRating) ? this.movie.imdbRating.replace(/\./, ',') : false;
  }

  set rating(value) {
    if(value){
      value = value.replace(/,/, '.');
      if(!isNaN(parseFloat(value)) && isFinite(value)){
        this.movie.imdbRating = value;
      }else{
        this.movie.imdbRating = false;
      }
    }
  }

  get id(){
    return this.movie.Id;
  }

  set id(value) {
    if(value.toLowerCase().substr(0, 2) !== 'tt'){
      throw "IMDB-ID must start wie 'tt'";
    }
    this.movie.Id = value;
  }

  get title() {
    return this.movie.Title;
  }

  set title(value) {
    this.movie.Title = value;
  }

  get releaseYear() {
    return this.movie.Year;
  }

  set releaseYear(year) {
    let matches = year.match(/\d+/);
    this.movie.Year = matches[0];
    // this.movie.Year = year;
  }

  get actors() {
    return this.movie.Actors;
  }

  get titleType() {
    return this.movie.TitleType;
  }

  set titleType(value) {
    this.movie.TitleType = value;
  }

  toJSON(){
    return JSON.stringify(this.movie);
  }
}

module.exports = Movie;