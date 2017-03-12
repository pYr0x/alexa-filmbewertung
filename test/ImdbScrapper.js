var chai = require('chai');
var assert = chai.assert;

var ImdbScrapper = require('../src/provider/ImdbScrapper');

describe('ImdbScrapper', () => {
  it('should reject if no movie found', (done) => {
    const imdbs = new ImdbScrapper('ÄÖÜ');
    imdbs.findMovie().then().catch((reason) => {
      assert(reason, 'movie not found');
      done();
    });
  });

  it('should load multiple movies for herr der ringe', function (done) {
    const imdbs = new ImdbScrapper('herr der ringe', "2001");

    imdbs.findMovie().then((movies) => {
      assert.isArray(movies);
      assert.equal(movies.length, 1);
      done();
    });
  });
});