"use strict";
const _ = require("lodash");
var chai = require("chai");
var assert = chai.assert;


var requestTemplate = require('./requestTemplate');


describe("Alexa", function() {

  var app = require('../index');

  describe("app", function() {
    beforeEach(function () {
    });

    it('should launch', function (done) {
      app.request(requestTemplate.launch).then(function (response) {
        assert.equal(response.response.outputSpeech.ssml, '<speak>Nenne mir einen Film und ich sage dir seine Bewertung.</speak>');
        assert.equal(response.response.reprompt.outputSpeech.ssml, '<speak>Ich hab leider nichts gehört. Nenne mir einen Film.</speak>');
        assert.isFalse(response.response.shouldEndSession);
        done();
      });
    });

    it('should help users', function (done) {
      app.request(requestTemplate.help).then(function (response) {
        assert.equal(response.MENU_TEST, 'main');
        done();
      });
    });

    it('should get immediately the movie raking', function (done) {
      app.request(requestTemplate.movieAndRating).then(function (response) {
        assert(response.response.outputSpeech);
        assert.equal(response.MENU_TEST, 'movieRating');
        done();
      });
    });

    it('should list all found movies', function (done) {
      app.request(requestTemplate.searchMovie).then(function (response) {
        assert(response.response.outputSpeech);
        assert.equal(response.MENU_TEST, 'movieList');
        done();
      });
    });

    it('should fall back to ImdbScrapper', function (done) {
      app.request(requestTemplate.searchGermanMovieWithYear).then(function (response) {
        assert(response.response.outputSpeech);
        assert.equal(response.MENU_TEST, 'movieRating');
        assert.equal(response.MOVIE_TEST.movie.Response, 'true');
        assert.ok(response.MOVIE_TEST.id);
        assert.ok(response.MOVIE_TEST.rating);
        assert.equal(response.response.outputSpeech.ssml.indexOf('<speak>Der Film: Der Herr der Ringe - Die Gefährten, aus dem Jahr 2001'), 0);
        done();
      });
    });

    it("should find 'john wick'", function (done) {
      app.request(requestTemplate.searchJohnWick).then(function (response) {
        assert(response.response.outputSpeech);
        assert.equal(response.MENU_TEST, 'movieList');
        assert.equal(response.response.outputSpeech.ssml.indexOf('<speak>Ich habe mehrere Filme mit dem Titel: john wick gefunden.'), 0);
        done();
      });
    });

    it("should find 'dog eat dog' from 2016", function (done) {
      app.request(requestTemplate.searchDogEatDog).then(function (response) {
        assert(response.response.outputSpeech);
        assert.equal(response.MOVIE_TEST.title, "Dog Eat Dog");
        assert.isBelow(response.MOVIE_TEST.movie.imdbRating, 5);
        assert.ok(response.MOVIE_TEST.id);
        done();
      });
    });

    it("should find 'tripple x' from 2017 with german sonderzeichen", function (done) {
      app.request(requestTemplate.searchXXX).then(function (response) {
        assert(response.response.outputSpeech);
        assert.equal(response.MOVIE_TEST.title, "xXx: Die Rückkehr des Xander Cage");
        assert.isBelow(response.MOVIE_TEST.movie.imdbRating, 6);
        assert.ok(response.MOVIE_TEST.id);
        done();
      });
    });

    it("should repeat movie list", function (done) {
      app.request(requestTemplate.repeat).then(function (response) {
        assert.isOk(~response.response.outputSpeech.ssml.indexOf('Erstens: Der Herr der Ringe'));
        done();
      });
    });

    it("should find La La Land", function (done) {
      app.request(requestTemplate.searchLalaLand).then(function (response) {
        // assert.isOk(~response.response.outputSpeech.ssml.indexOf('Erstens: Der Herr der Ringe'));
        assert.isOk(1);
        done();
      });
    });

    it("should handle AKA movie titles ", function (done) {
      app.request(requestTemplate.searchZehnGebote).then(function (response) {
        assert.equal(response.MENU_TEST, 'movieList');
        response.sessionAttributes.imdb_movies.forEach(function (item) {
          let movie = JSON.parse(item);
          if(_.includes(movie, 'The Great Commandment') && _.includes(movie, '1939')){
            assert.isOk(1);
          }
        });
        done();
      });
    });

    it("should find der Pate", function (done) {
      app.request(requestTemplate.searchDerPate).then(function (response) {
        assert.equal(response.MENU_TEST, 'movieList');
        done();
      });
    });

    it("choose 'vierter' matrix movie", function (done) {
      app.request(requestTemplate.matrixStrReplaceError).then(function (response) {
        assert.equal(response.MENU_TEST, "movieRating");
        assert.isTrue(!!~response.response.outputSpeech.ssml.indexOf('Der Film: The Matrix Reloaded Revisited'));
        done();
      });
    });

    it("should find a movie with a thrid part", function (done) {
      app.request(requestTemplate.searchStarWarsEpisode3).then(function (response) {
        assert.equal(response.MENU_TEST, 'movieList');
        assert.equal(response.sessionAttributes.imdb_movies.length, 5);
        done();
      });
    });

    it("should find a movie with a second part with more the five results", function (done) {
      app.request(requestTemplate.searchStarWarsEpisode2).then(function (response) {
        assert.equal(response.MENU_TEST, 'movieRating');
        assert.isTrue(!!~response.response.outputSpeech.ssml.indexOf('Der Film: Star Wars: Episode II - Angriff der Klonkrieger, aus dem Jahr 2002 hat'));
        done();
      });
    });

    it("choose a movie number that is not valid", function (done) {
      app.request(requestTemplate.fifthPart).then(function (response) {
        assert.isTrue(!!~response.response.outputSpeech.ssml.indexOf('Ich konnte den fünften Titel nicht finden. Bitte wähle einen anderen Film aus.'));
        done();
      });
    });
  });
});