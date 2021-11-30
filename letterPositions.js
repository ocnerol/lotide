const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("✅✅✅ The given arrays ", arr1, " and ", arr2, " are equal!");
  } else {
    console.log("🛑🛑🛑 The given arrays ", arr1, " and ", arr2, "are not equal!");
  }
};

const letterPositions = function(sentence) {
  const results = {};
  // loop through sentence
  // use if condition to skip over space characters
  // if not space:
  // see if character is already a key of results
  // if true:
  // push index of current character into results[sentence[i]]
  // else
  // create new keyval pair in results and initialize the value as an array with the index of the current character

  for (let i = 0; i < sentence.length; i++) {
    const currentCharacter = sentence[i];
    if (currentCharacter !== " ") {
      if (results[currentCharacter]) {
        results[currentCharacter].push(i);
      } else {
        results[currentCharacter] = [i];
      }
    }
  }
  return results;
};

// const result1 = letterPositions('hello');
// assertArraysEqual(result1['e'], [1]);    // 'e' found in pos. 1
// assertArraysEqual(result1['h'], [0]);    // 'h' found in pos. 0
// assertArraysEqual(result1['l'], [2, 3]); // 'l' found in pos. 2, 3
// assertArraysEqual(result1['o'], [4]);    // 'o' found in pos. 4

// assertArraysEqual(letterPositions('lighthouse in the house')['h'], [3, 5, 15, 18]);
// assertArraysEqual(letterPositions('lighthouse in the house')['e'], [9, 16, 22]);

module.exports = letterPositions;