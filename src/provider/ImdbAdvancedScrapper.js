"use strict";

const scrapeIt = require("scrape-it");
const Movie = require('../Movie');

class ImdbAdvancedScrapper {
  static get url() {
    return "http://www.alva-boden.de/proxy/imdb-advanced.php";
  }

  constructor(title, year){
    this.title = title;
    this.year = year;
    this.count = 5;
    this.movies = [];
  }

  _query() {
    let self = this;

    this.promise = new Promise((resolve, reject) => {
      scrapeIt(ImdbAdvancedScrapper.url + "?api_key="+ process.env.api_key +"&count=" + this.count + "&title_type=feature,tv_movie&title=" + this.title, {
        movies: {
          listItem: "div.lister-list .lister-item",
          name: "movie",
          data: {
            title: "h3 a",
            href: {
              selector: "h3 a",
              attr: "href"
            },
            year: "h3 span.lister-item-year",
            rating: "div.ratings-bar .ratings-imdb-rating"
          }
        }
      }).then(function (result) {
        if(result.movies.length <= 0) {
          reject('movie not found');
        }else{
          result.movies.forEach(function (movieObj) {
            if(movieObj.year.length <= 0) {
              return;
            }
            let movie = new Movie('{"Response": "true"}');

            movie.title = movieObj.title;
            movie.releaseYear = movieObj.year;
            let matches = movieObj.href.match(/tt\d+/);
            movie.id = matches[0];
            movie.rating = movieObj.rating;

            // if the year should not have any word character!
            // if year contains any word character do not list in movies!
            // and if no realeaseYear was found
            if(!(/[a-z]/.test(movieObj.year)) && movie.releaseYear !== undefined){
              if(self.year !== undefined){
                if(parseInt(self.year) === parseInt(movie.releaseYear)){
                  self.movies.push(movie);
                }
              }else{
                self.movies.push(movie);
              }
            }
          });
          if(Array.isArray(self.movies) && self.movies.length > 0){
            resolve(self.movies);
          }else{
            reject('movie not found');
          }
        }
      });
        // .catch(function (err) {
        // reject(err);
      // });
    });

    return this.promise;
  }

  findMovie() {
    return this._query();
  }

  isRequestResolved(){
    return typeof this.promise === "object";
  }
}

module.exports = ImdbAdvancedScrapper;