// http://imdb.wemakesites.net/
// 02c24169-961e-41c8-8429-79040544711d
"use strict";

const unirest = require('unirest');
const Movie = require('../Movie');

class WMS {
  static get url() {
    return "http://imdb.wemakesites.net/";
  }

  constructor(imdbId) {
    this._imdbId = imdbId;
  }
}

module.exports = WMS;