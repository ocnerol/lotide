const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

// sentence is string
// purpose: return count of each of the letters in given sentence as an object
const countLetters = function(sentence) {
  let results = {};
  for (let letter of sentence) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};

assertEqual(countLetters("lighthouse")["h"], 2);
assertEqual(countLetters("lighthouse")["i"], 1);
assertEqual(countLetters("lighthouse")["x"], undefined);
assertEqual(countLetters("functions objects conditionals arrays loops")["a"], 3);
assertEqual(countLetters("0B2b4B6bbbb")["B"], 2);