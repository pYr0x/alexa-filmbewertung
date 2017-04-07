"use strict";

const unirest = require('unirest');
const Movie = require('./../Movie');

class OMDB {
  static get url() {
    return "http://www.omdbapi.com/";
  }

  constructor(imdbId) {
    this._imdbId = imdbId;
  }

  _query() {
    const Request = unirest.get(OMDB.url)
                           .query({
                             "i": this._imdbId
                           });

    this.promise = new Promise((resolve, reject) => {

      Request.end((res)  => {
        let movie = new Movie(res.raw_body || '{}');
        if(!movie.found()) {
          reject('movie not found');
        }else{
          this.movie = movie;
          resolve(movie);
        }
      });
    });

    return this.promise;
  }

  findMovie() {
    return this.isRequestResolved() ? this.promise : this._query();
  }

  isRequestResolved(){
    return typeof this.promise === "object";
  }
}

module.exports = OMDB;