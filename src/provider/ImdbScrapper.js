"use strict";

const scrapeIt = require("scrape-it");
const Movie = require('../Movie');

class ImdbScrapper {
  static get url() {
    return "http://www.alva-boden.de/proxy/imdb.php";
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
      scrapeIt(ImdbScrapper.url + "?api_key="+ process.env.api_key +"&s=tt&ttype=ft&q=" + this.title, {
        movies: {
          listItem: "table.findList tr",
          name: "movie",
          data: {
            title: "a",
            href: {
              selector: "a",
              attr: "href"
            },
            year: {
              selector: ".result_text",
              convert: function (text) {

                // find a "aka" title
                // split it at the characteristic string
                if(~text.indexOf(') aka')){
                  let parts = text.split(") aka");
                  text = parts[0]+')';
                }

                let matches = text.match(/\((\d+)\)$/);
                if (matches && matches.length >= 2) {
                  return matches[1];
                } else {
                  return false;
                }
              }
            }
          }
        }
      }).then(function (result) {
        if(result.movies.length <= 0) {
          reject('movie not found');
        }

        let i = 1;
        result.movies.forEach(function (movieObj) {
          if(i > self.count){
            return false;
          }

          let movie = new Movie('{"Response": "true"}');

          movie.title = movieObj.title;
          movie.releaseYear = movieObj.year;
          let matches = movieObj.href.match(/tt\d+/);
          movie.id = matches[0];

          // if the year should not have any word character!
          // if year contains any word character do not list in movies!
          if(!(/[a-z]/.test(movieObj.year))){
            if(self.year !== undefined){
              if(parseInt(self.year) === parseInt(movie.releaseYear)){
                self.movies.push(movie);
              }
            }else{
              self.movies.push(movie);
            }
          }
          i++;
        });

        resolve(self.movies);

      }).catch(function (err) {
        reject(err);
      });
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

module.exports = ImdbScrapper;