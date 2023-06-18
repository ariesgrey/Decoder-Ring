const { caesar } = require("../src/caesar");
const { expect } = require("chai");

describe("caeser", () => {
  describe("error handling", () => {
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
  });

  describe("encoding", () => {
    it("should encode the message by shifting the letters", () => {
      const input = "test";
      const shift = 1;
      const actual = caesar(input, shift);
      const expected = "uftu";

      expect(actual).to.equal(expected);
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

  describe("decoding", () => {
    it("should decode the message by shifting the letters back", () => {
      const input = "uftu";
      const shift = 1;
      const actual = caesar(input, shift, false);
      const expected = "test";

      expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
      const input = "UFTUjoh";
      const shift = 1;
      const actual = caesar(input, shift, false);
      const expected = "testing";

      expect(actual).to.equal(expected);
    });

    it("should handle shifts that go past the end of the alphabet (right)", () => {
      const input = "c";
      const shift = 3;
      const actual = caesar(input, shift, false);
      const expected = "z";

      expect(actual).to.equal(expected);
    });

    it("should handle shifts that go past the end of the alphabet (left)", () => {
      const input = "x";
      const shift = -3;
      const actual = caesar(input, shift, false);
      const expected = "a";

      expect(actual).to.equal(expected);
    });

    it("should maintain spacing and other nonalphabetical symbols in the message", () => {
      const input = "ifmmp xpsme!";
      const shift = 1;
      const actual = caesar(input, shift, false);
      const expected = "hello world!";

      expect(actual).to.equal(expected);
    });
  });
});
