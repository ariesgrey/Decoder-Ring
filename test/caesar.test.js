const { caesar } = require("../src/caesar");
const { expect } = require("chai");

describe("caeser", () => {
  it("should return 'false' if the shift value is 0", () => {
    const input = "test";
    const shift = 0;
    const actual = caesar(input, shift);
    expect(actual).to.be.false;
  });

  it("should return 'false' if the shift value is > 25", () => {
    const input = "test";
    const shift = 26;
    const actual = caesar(input, shift);
    expect(actual).to.be.false;
  });

  it("should return 'false' if the shift value is < -25", () => {
    const input = "test";
    const shift = -26;
    const actual = caesar(input, shift);
    expect(actual).to.be.false;
  });

  it("should ignore capital letters", () => {
    const input = "TESTing";
    const shift = 1;
    const actual = caesar(input, shift);
    const expected = "uftujoh";
    expect(actual).to.equal(expected);
  });

  it("should handle shifts that go past the end of the alphabet (right)", () => {
    const input = "z";
    const shift = 3;
    const actual = caesar(input, shift);
    const expected = "c";
    expect(actual).to.equal(expected);
  });

  it("should handle shifts that go past the end of the alphabet (left)", () => {
    const input = "a";
    const shift = -3;
    const actual = caesar(input, shift);
    const expected = "x";
    expect(actual).to.equal(expected);
  });

  it("should maintain spacing and other nonalphabetical symbols in the message", () => {
    const input = "hello world!";
    const shift = 1;
    const actual = caesar(input, shift);
    const expected = "ifmmp xpsme!";
    expect(actual).to.equal(expected);
  });
});
