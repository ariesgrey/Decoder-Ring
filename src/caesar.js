const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    // error handling
    if (!shift || shift > 25 || shift < -25) return false;

    // ignore capital letters
    input = input.toLowerCase();
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let shiftedAlphabet = "";
    let result = "";

    // shift opposite direction if decoding
    if (encode === false) shift = 0 - shift;

    // use substrings to create new shifted alphabet string, matching by index
    if (shift > 0) {
      shiftedAlphabet =
        alphabet.substring(shift) + alphabet.substring(0, shift);
    } else {
      shiftedAlphabet =
        alphabet.substring(26 + shift) + alphabet.substring(0, 26 + shift);
    }

    // replace each letter of input string with corresponding letter in shifted alphabet, using index
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      const alphabetIndex = alphabet.indexOf(char);
      // keep spaces and symbols the same
      if (alphabetIndex === -1) {
        result += char;
      } else {
        result += shiftedAlphabet[alphabetIndex];
      }
    }

    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
