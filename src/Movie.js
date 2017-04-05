"use strict";

class Movie {

  static normalize(name){
    const replaceMap = {
      "eins": "1",
      "zwei": "2",
      "drei": "3",
      "vier": "4",
      "fünf": "5",
      "sechs": "6",
      "sieben": "7",
      "acht": "8",
      "neun": "9",
      "zehn": "10",
      "elf": "11",
      "zwölf": "12"
    };

    for (const key of Object.keys(replaceMap)) {
      // replace ending numbers
      name = name.replace(new RegExp("\\s+"+key+"$","g"), " "+replaceMap[key]);

      // replace numbers between spaces
      name = name.replace(new RegExp("\\s+"+key+"\\s+","g"), " "+replaceMap[key]+" ");
    }

    const romanCharacters = {
      "I": "eins",
      "II": "zwei",
      "III": "drei",
      "IV": "vier",
      "V": "fünf",
      "VI": "sechs",
      "VII": "sieben",
      "VIII": "acht",
      "IX": "neun",
      "X": "zehn",
      "XI": "elf",
      "XII": "zwölf"
    };

    for (const key of Object.keys(romanCharacters)) {
      // replace ending numbers
      name = name.replace(new RegExp("\\s+"+key+"$","g"), " "+romanCharacters[key]);

      // replace numbers between spaces
      name = name.replace(new RegExp("\\s+"+key+"\\s+","g"), " "+romanCharacters[key]+" ");
    }

    return name;
  }

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
    if(typeof year !== "undefined" && year) {
      let matches = year.match(/\d+/);
      if(matches !== null && matches.length > 0){
        this.movie.Year = matches[0];
      }
    }
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