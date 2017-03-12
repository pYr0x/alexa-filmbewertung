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
});