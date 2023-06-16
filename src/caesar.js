// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // shift: positive number means shifting to the right (i.e., A becomes D) whereas a negative number means shifting to the left (i.e., M becomes K).
  function caesar(input, shift, encode = true) {
    // error handling
    if (!shift || shift > 25 || shift < -25) return false;

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
