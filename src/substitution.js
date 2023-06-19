const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    // error handling
    if (!alphabet || alphabet.length !== 26) return false;
    for (let i = 0; i < 26; i++) {
      const char = alphabet[i];
      const rest = alphabet.substring(i + 1);
      if (rest.includes(char)) return false;
    }

    // ignore capital letters
    input = input.toLowerCase();
    const regAlphabet = "abcdefghijklmnopqrstuvwxyz";
    let result = "";

    // loop through input
    for (let i = 0; i < input.length; i++) {
      const char = input[i];

      // whether encoding or decoding, maintain any spaces and skip to next character
      if (char === " ") {
        result += char;
        continue;
      }

      let charIndex, newChar;
      // encoding: use index of the character in the regular alphabet to find its match in the substitution alphabet
      if (encode) {
        charIndex = regAlphabet.indexOf(char);
        newChar = alphabet[charIndex];
        // decoding: use index of the character in the substitution alphabet to find its match in the regular alphabet
      } else {
        charIndex = alphabet.indexOf(char);
        newChar = regAlphabet[charIndex];
      }
      // add matching character to result
      result += newChar;
    }

    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
