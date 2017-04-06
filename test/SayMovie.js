const chai = require('chai');
const assert = chai.assert;
const sinon = require('sinon');

const alexa = require('alexa-app');
const Movie = require('../src/Movie');
const Menu = require('../src/Menu');
const SayMovie = require('../src/SayMovie');

describe('output speech', function () {
  let request, response, menu;

  let searchedForStub, slotStub, sayStub;

  let said;

  beforeEach(function () {
    request = new alexa.request({});
    response = new alexa.response({});
    menu = new Menu({});

    // Stub request methods
    // session stuff
    searchedForStub = sinon.stub();
    sinon.stub(request, "getSession").callsFake(function () {
      return {
        get: searchedForStub
      };
    });
    // slot stuff
    slotStub = sinon.stub(request, "slot");

    // Stub response methods
    sayStub = sinon.stub(response, "say").callsFake(function (response) {
      said = response;
    });

    // Stub menu methods
    sinon.stub(menu, "getCurrentMenu");
  });

  it('should not contain any invalid chars', function () {
    searchedForStub.withArgs('imdb_searchedFor').returns('The Fast and the Furious');
    slotStub.withArgs("MOVIE").returns('The Fast and the Furious');
    slotStub.withArgs("YEAR").returns('2001');


    const sayMovie = new SayMovie(request, response, menu);

    const movies = [
      "{\"Response\":\"true\",\"Title\":\"Fast & Furious 6\",\"Year\":\"2013\",\"Id\":\"tt1905041\",\"imdbRating\":\"7.1\"}",
      "{\"Response\":\"true\",\"Title\":\"The Fast and the Furious\",\"Year\":\"2001\",\"Id\":\"tt0232500\",\"imdbRating\":\"6.7\"}",
      "{\"Response\":\"true\",\"Title\":\"The Fast and the Furious: Tokyo Drift\",\"Year\":\"2006\",\"Id\":\"tt0463985\",\"imdbRating\":\"6.0\"}",
      "{\"Response\":\"true\",\"Title\":\"Fast & Furious - Neues Modell. Originalteile.\",\"Year\":\"2009\",\"Id\":\"tt1013752\",\"imdbRating\":\"6.7\"}",
      "{\"Response\":\"true\",\"Title\":\"2 Fast 2 Furious\",\"Year\":\"2003\",\"Id\":\"tt0322259\",\"imdbRating\":\"5.9\"}"
    ];

    let movieList = movies.map(function (item) {
      return new Movie(item);
    });

    sayMovie.list(movieList);

    sinon.assert.called(searchedForStub);
    sinon.assert.called(sayStub);

    assert.isFalse(!!~said.indexOf( ' & '), "should not contain a '&' char");
    assert.isTrue(!!~said.indexOf( '&amp;'), "'&' is escaped");
  });
});