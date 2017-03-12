var chai = require('chai');
var assert = chai.assert;

var ImdbAdvancedScrapper = require('../src/provider/ImdbAdvancedScrapper');

describe('ImdbAdvancedScrapper', () => {
  it('should reject if no movie found', (done) => {
    const imdbs = new ImdbAdvancedScrapper('_');
    imdbs.findMovie().then().catch((reason) => {
      assert(reason, 'movie not found');
      done();
    });
  });

  it('should load multiple movies for matrix', function (done) {
    const imdbs = new ImdbAdvancedScrapper('matrix');

    imdbs.findMovie().then((movies) => {
      assert.isArray(movies);
      assert(movies.length);
      done();
    });
  });

  it('should find matrix directly by name and year', function (done) {
    const imdbs = new ImdbAdvancedScrapper('matrix', "1999");

    imdbs.findMovie().then((movies) => {
      assert.equal(movies.length, 1);
      done();
    });
  });
});