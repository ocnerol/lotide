const assertArraysEqual = function(arr1, arr2) {

  const eqArrays = function(array1, array2) {
    if (array1.length !== array2.length) {
      return false;
    }
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  };

  if (eqArrays(arr1, arr2)) {
    console.log("✅✅✅ The given arrays ", arr1, " and ", arr2, " are equal!");
  } else {
    console.log("🛑🛑🛑 The given arrays ", arr1, " and ", arr2, "are not equal!");
  }
};

const words = ["ground", "control", "to", "major", "tom"];
const names = ['adele', 'lana', 'billie', 'lorde', 'beyonce', 'britney'];

const map = function(array, callback) {
  const results = [];
  for (let i = 0; i < array.length; i++) {
    results.push(callback(array[i]));
  }
  return results;
};

module.exports = map;
// const firstLetter = map(words, word => word[0]);
// const allToOne = map(names, name => 1);
// const nameLengths = map(names, name => name.length);
// const lastLetter = map(names, name => name[name.length - 1]);

// assertArraysEqual(allToOne, [1,1,1,1,1,1]);
// assertArraysEqual(nameLengths, [5,4,6,5,7,7]);
// assertArraysEqual(lastLetter, ['e','a','e','e','e','y']);

