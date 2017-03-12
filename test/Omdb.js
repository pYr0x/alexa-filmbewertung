var chai = require('chai');
var assert = chai.assert;

var OMDB = require('../src/provider/Omdb');

describe('OMDB', () => {
  it('should reject if no movie found', (done) => {
    const omdb = new OMDB('tt0110413__');
    omdb.findMovie().then().catch((reason) => {
      assert(reason, 'movie not found');
      done();
    });
  });

  it('should return a movie', (done) => {
    const omdb = new OMDB('tt0110413');
    omdb.findMovie().then(function(movie){
      const rating = movie.rating;
      assert.isNotFalse(rating);
      assert.isAbove(rating.replace(/,/, '.'), 5, 'the rating is above 5 stars');
      done();
    }).catch((err) => {
      done(err);
    });
  });
});