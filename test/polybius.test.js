const { polybius } = require("../src/polybius");
const { expect } = require("chai");

describe("polybius", () => {
  describe("encoding", () => {
    it("should translate letters into their corresponding number pairs", () => {
      const input = "test";
      const actual = polybius(input);
      const expected = "44513444";

      expect(actual).to.equal(expected);
    });

    it("should translate the letters i and j to 42", () => {
      const input = "jig";
      const actual = polybius(input);
      const expected = "424222";

      expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
      const input = "TESTing";
      const actual = polybius(input);
      const expected = "44513444423322";

      expect(actual).to.equal(expected);
    });

    it("should maintain spaces in the message", () => {
      const input = "hello world";
      const actual = polybius(input);
      const expected = "3251131343 2543241341";

      expect(actual).to.equal(expected);
    });
  });

  describe("decoding", () => {
    it("should translate number pairs into their corresponding letters", () => {
      const input = "44513444";
      const actual = polybius(input, false);
      const expected = "test";

      expect(actual).to.equal(expected);
    });

    it("should translate '42' to (i/j)", () => {
      const input = "424222";
      const actual = polybius(input, false);
      const expected = "(i/j)(i/j)g";
      expect(actual).to.equal(expected);
    });

    it("should maintain spaces in the message", () => {
      const input = "3251131343 2543241341";
      const actual = polybius(input, false);
      const expected = "hello world";
      expect(actual).to.equal(expected);
    });

    it("should return 'false' if there is an odd amount of numbers", () => {
      const input = "4451344 44513444";
      const actual = polybius(input, false);

      expect(actual).to.be.false;
    });
  });
});
