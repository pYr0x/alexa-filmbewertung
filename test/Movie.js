"use strict";

const chai = require('chai');
const assert = chai.assert;

const Movie = require('../src/Movie');

describe('Movie', function () {
  it('should thrown if parse error', function () {
    try {
      new Movie("");
    }catch (err) {
      assert(err);
    }
  });

  it('should parse a valid json', function () {
    const movie = new Movie('{"Title": "Foobar", "Year": "1986", "imdbRating":"8.6", "Response":"True"}');

    assert.equal(movie.title, "Foobar");
    assert.equal(movie.releaseYear, "1986");
    assert.equal(movie.rating, "8,6");

  });

  it('should handle n/a imdb ratings', function () {
    const movie = new Movie('{"imdbRating": "n/a"}');
    assert.isFalse(movie.rating);
  });

  it('should normalize the name for proper search', function () {
    assert.equal(Movie.normalize('Robocop eins'), 'Robocop 1');
    assert.equal(Movie.normalize('eins und  eins macht zwei'), 'eins und 1 macht 2');
    assert.equal(Movie.normalize('jungfrau mit dreizig'), 'jungfrau mit dreizig');
    assert.equal(Movie.normalize('Star Wars sieben'), 'Star Wars 7');
    assert.equal(Movie.normalize('Star Wars sieben die letzten Jedi'), 'Star Wars 7 die letzten Jedi');
    assert.equal(Movie.normalize('wahreins'), 'wahreins');
  });

  it('should rename title with roman numbers', function () {
    let movie = new Movie('{}');

    movie.title = "Rocky II";
    assert.equal(movie.title, "Rocky zwei");

    movie.title = 'Rocky III - Das Auge des Tigers';
    assert.equal(movie.title, "Rocky drei - Das Auge des Tigers");

    movie.title = 'Rocky XI - Das Auge des Tigers';
    assert.equal(movie.title, "Rocky elf - Das Auge des Tigers");

    movie.title = 'Rocky IX - Das Auge des Tigers';
    assert.equal(movie.title, "Rocky neun - Das Auge des Tigers");
  });
});