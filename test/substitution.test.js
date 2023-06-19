const { substitution } = require("../src/substitution");
const { expect } = require("chai");

describe("substitution", () => {
  describe("error handling", () => {
    it("should return 'false' if the substitution alphabet is missing", () => {
      const input = "testing";
      const actual = substitution(input);

      expect(actual).to.be.false;
    });

    it("should return 'false' if the substitution alphabet is not exactly 26 characters", () => {
      const input = "testing";
      const alphabet = "xyz";
      const actual = substitution(input, alphabet);

      expect(actual).to.be.false;
    });

    it("should return 'false' if the substitution alphabet is not only unique characters", () => {
      const input = "testing";
      const alphabet = "xyzxyzxyzxyzxyzxyzxyzxyzxy";
      const actual = substitution(input, alphabet);

      expect(actual).to.be.false;
    });
  });

  describe("encoding", () => {
    it("should encode the message using the given substitution alphabet", () => {
      const input = "testing";
      const alphabet = "qwertyuiopasdfghjklzxcvbnm";
      const actual = substitution(input, alphabet);
      const expected = "ztlzofu";

      expect(actual).to.equal(expected);
    });

    it("should work with non-letter symbols included in the substitution alphabet", () => {
      const input = "testing";
      const alphabet = "zaq!xsw@cde#vfr$bgt%nhy^mj";
      const actual = substitution(input, alphabet);
      const expected = "%xt%cfw";

      expect(actual).to.equal(expected);
    });

    it("should maintain spaces in the message", () => {
      const input = "hello world";
      const alphabet = "qwertyuiopasdfghjklzxcvbnm";
      const actual = substitution(input, alphabet);
      const expected = "itssg vgksr";

      expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
      const input = "TESTing";
      const alphabet = "qwertyuiopasdfghjklzxcvbnm";
      const actual = substitution(input, alphabet);
      const expected = "ztlzofu";

      expect(actual).to.equal(expected);
    });
  });

  describe("decoding", () => {
    it("should decode the message using the given substitution alphabet", () => {
      const input = "ztlzofu";
      const alphabet = "qwertyuiopasdfghjklzxcvbnm";
      const actual = substitution(input, alphabet, false);
      const expected = "testing";

      expect(actual).to.equal(expected);
    });

    it("should work with non-letter symbols included in the substitution alphabet", () => {
      const input = "%xt%cfw";
      const alphabet = "zaq!xsw@cde#vfr$bgt%nhy^mj";
      const actual = substitution(input, alphabet, false);
      const expected = "testing";

      expect(actual).to.equal(expected);
    });

    it("should maintain spaces in the message", () => {
      const input = "itssg vgksr";
      const alphabet = "qwertyuiopasdfghjklzxcvbnm";
      const actual = substitution(input, alphabet, false);
      const expected = "hello world";

      expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
      const input = "ZTLZofu";
      const alphabet = "qwertyuiopasdfghjklzxcvbnm";
      const actual = substitution(input, alphabet, false);
      const expected = "testing";

      expect(actual).to.equal(expected);
    });
  });
});
