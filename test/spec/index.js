var expect = require('chai').expect;


describe('random-integral', function () {

  var randomInt = require('../../');

  it('randomInt()', function () {
    expect(randomInt()).to.be.a('number');
  });

  it('randomInt({ max: 2 })', function () {
    expect(randomInt({ max: 2 })).be.be.at.most(2);
  });

  it('randomInt({ min: 2, max: 10 })', function () {
    expect(randomInt({ min: 2, max: 10 })).to.be.within(2, 10);
  });

  it('randomInt({ min: 10, max: 2 })', function () {
    expect(randomInt({ min: 10, max: 2 })).to.be.within(2, 10);
  });

  it('randomInt({ min: -10, max: -2 })', function () {
    expect(randomInt({ min: -10, max: -2 })).to.be.within(-10, -2);
  });

  it('randomInt({ min: \'2\', max: \'10\' })', function () {
    expect(randomInt({ min: '2', max: '10' })).to.be.within(2, 10);
  });

  it('randomInt({ min: 0, max: 0 }) should always be 0', function () {
    expect(randomInt({ min: 0, max: 0 })).to.equal(0);
  });

  it('randomInt({ min: 1, max: 1 }) should always be 1', function () {
    expect(randomInt({ min: 1, max: 1 })).to.equal(1);
  });

  it('randomInt({ min: -1, max: -1 }) should always be -1', function () {
    expect(randomInt({ min: -1, max: -1 })).to.equal(-1);
  });

  it('randomInt({ min: \'abc\', max: { a: 1 } })', function () {
    expect(randomInt({ min: 'abc', max: { a: 1 } })).to.be.a('number');
  });
});
