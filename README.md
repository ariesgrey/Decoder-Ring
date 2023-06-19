# Decoder Ring
### Thinkful Capstone Project

For this project, I built 3 functions that encode and decode strings using specific ciphers, and wrote a series of tests using Mocha and Chai for each cipher to ensure their functionality.

*(All code within the HTML and CSS files, as well as the 'caeser.submission.test.js', 'polybius.submission.test.js', and 'substitution.submission.test.js' files, was provided pre-written.)*

---

## Caeser Shift

###### `src/caeser.js`, `test/caeser.test.js`

The `caeser()` function is based on the substitution cipher originally used by Julius Caeser, which relies on taking the alphabet and shifting letters to the left or right.

![caesar shift visual](https://github.com/ariesgrey/Decoder-Ring/assets/133818769/6fc9d1fc-d0a9-4f30-ab07-a467e7ea1233)

#### The function takes in 3 parameters: 
- *input* - the string to be encoded or decoded
- *shift* - an integer referring to how much each letter is "shifted" by (positive = shift to the right, negative = shift to the left)
- *encode* - a boolean referring to whether it should be encoding (`true`, default) or decoding (`false`) the string

#### The tests for this function include:
- If the *shift* value is not present, is 0, is greater than 25, or is less than -25, the function should return `false`
- Spaces and non-alphabetic symbols should be maintained
- Capital letters should be ignored (case-insensitive)
- If a letter is shifted past the end of the alphabet, it should wrap around to the other end

---

## Polybius Square

###### `src/polybius.js`, `test/polybius.test.js`

The `polybius()` function is a cipher that arrages the standard alphabet into a grid and assigns each letter a 2 digit numerical code.

The grid can usually be arranged and read however one would like, but my code is based off of the grid below, with the coordinates containing the top row number first followed by the left column number second.

|       | **1** | **2** | **3** | **4** | **5** |
| ----- | ----- | ----- | ----- | ----- | ----- |
| **1** | A     | B     | C     | D     | E     |
| **2** | F     | G     | H     | I/J   | K     |
| **3** | L     | M     | N     | O     | P     |
| **4** | Q     | R     | S     | T     | U     |
| **5** | V     | W     | X     | Y     | Z     |

#### The function takes in 2 parameters:
- *input* - the string to be encoded or decoded
- *encode* - a boolean referring to whether it should be encoding (`true`, default) or decoding (`false`) the string

#### The tests for this function include:
- Spaces should be maintained
- Capital letters should be ignored (case-insensitive)
- When decoding, the function should return `false` if the number of characters in the *input* string **excluding spaces** is not even.
- The letters "I" and "J" share a space: When encoding, both letters are converted to "42"; when decoding, both letters should be shown as "(i/j)"

---

## Substitution Cipher

###### `src/substitution.js`, `test/substitution.test.js`

The `substitution()` function is a cipher that transposes the letters from the standard alphabet to a given substitution alphabet.

![substitution cipher visual](https://github.com/ariesgrey/Decoder-Ring/assets/133818769/370a8c49-c8bd-4edf-87e5-ad168e67085f)

#### The function takes in 3 parameters:
- *input* - the string to be encoded or decoded
- *alphabet* - the substitution alphabet
- *encode* - a boolean referring to whether it should be encoding (`true`, default) or decoding (`false`) the string

#### The tests for this function include:
- Spaces should be maintained
- Capital letters should be ignored (case-insensitive)
- If the *alphabet* parameter is not a string of exactly 26 characters, the function should return `false`
- If the *alphabet* parameter contains any repeating characters, the function should return `false`

