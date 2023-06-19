const polybiusModule = (function () {
  // helper function with key for encoding
  function encodeLetter(letter) {
    let result = "";
    switch (letter) {
      case "a":
        result = "11";
        break;
      case "b":
        result = "21";
        break;
      case "c":
        result = "31";
        break;
      case "d":
        result = "41";
        break;
      case "e":
        result = "51";
        break;
      case "f":
        result = "12";
        break;
      case "g":
        result = "22";
        break;
      case "h":
        result = "32";
        break;
      case "i":
      case "j":
        result = "42";
        break;
      case "k":
        result = "52";
        break;
      case "l":
        result = "13";
        break;
      case "m":
        result = "23";
        break;
      case "n":
        result = "33";
        break;
      case "o":
        result = "43";
        break;
      case "p":
        result = "53";
        break;
      case "q":
        result = "14";
        break;
      case "r":
        result = "24";
        break;
      case "s":
        result = "34";
        break;
      case "t":
        result = "44";
        break;
      case "u":
        result = "54";
        break;
      case "v":
        result = "15";
        break;
      case "w":
        result = "25";
        break;
      case "x":
        result = "35";
        break;
      case "y":
        result = "45";
        break;
      case "z":
        result = "55";
        break;
      case " ":
        result = " ";
    }
    return result;
  }

  // helper function with key for decoding
  function decodeCode(code) {
    let result = "";
    switch (code) {
      case "11":
        result = "a";
        break;
      case "21":
        result = "b";
        break;
      case "31":
        result = "c";
        break;
      case "41":
        result = "d";
        break;
      case "51":
        result = "e";
        break;
      case "12":
        result = "f";
        break;
      case "22":
        result = "g";
        break;
      case "32":
        result = "h";
        break;
      case "42":
        result = "(i/j)";
        break;
      case "52":
        result = "k";
        break;
      case "13":
        result = "l";
        break;
      case "23":
        result = "m";
        break;
      case "33":
        result = "n";
        break;
      case "43":
        result = "o";
        break;
      case "53":
        result = "p";
        break;
      case "14":
        result = "q";
        break;
      case "24":
        result = "r";
        break;
      case "34":
        result = "s";
        break;
      case "44":
        result = "t";
        break;
      case "54":
        result = "u";
        break;
      case "15":
        result = "v";
        break;
      case "25":
        result = "w";
        break;
      case "35":
        result = "x";
        break;
      case "45":
        result = "y";
        break;
      case "55":
        result = "z";
    }
    return result;
  }

  function polybius(input, encode = true) {
    // decoding error handling
    if (encode === false) {
      const noSpaces = input.replace(/ /g, "");
      if (noSpaces.length % 2 !== 0) return false;
    }

    // ignore capitals
    input = input.toLowerCase();
    let result = "";

    // encode: loop through input values, use encode helper function to add corresponding codes to result
    if (encode === true) {
      for (let i = 0; i < input.length; i++) {
        const letter = input[i];
        const code = encodeLetter(letter);
        result += code;
      }
      // decode: loop through input values, if it's a space just transfer to result and continue loop, if not take 2-values at a time and use decode helper function to add corresponding letters to result
    } else {
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
          result += input[i];
        } else {
          const code = input.slice(i, i + 2);
          const letter = decodeCode(code);
          result += letter;
          i++;
        }
      }
    }

    return result;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
