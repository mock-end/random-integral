var expect = require('chai').expect;


describe('random-integral', function () {

  var randomInt = require('../../');

  it('randomInt()', function () {
    expect(randomInt()).to.be.a('number');
  });

  it('randomInt(2)', function () {
    expect(randomInt(2)).be.be.at.most(2);
  });

  it('randomInt(2, 10)', function () {
    expect(randomInt(2, 10)).to.be.within(2, 10);
  });

  it('randomInt(10, 2)', function () {
    expect(randomInt(10, 2)).to.be.within(2, 10);
  });

  it('randomInt(-10, -2)', function () {
    expect(randomInt(-10, -2)).to.be.within(-10, -2);
  });

  it('randomInt("2", "10")', function () {
    expect(randomInt('2', '10')).to.be.within(2, 10);
  });

  it('randomInt(0, 0) should always be 0', function () {
    expect(randomInt(0, 0)).to.equal(0);
  });

  it('randomInt(1, 1) should always be 1', function () {
    expect(randomInt(1, 1)).to.equal(1);
  });

  it('randomInt(-1, -1) should always be -1', function () {
    expect(randomInt(-1, -1)).to.equal(-1);
  });

  it('randomInt("abc", {a: 1})', function () {
    expect(randomInt('abc', {a: 1})).to.be.a('number');
  });
});
