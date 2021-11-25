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

const without = function(source, itemsToRemove) {
  let result = [];

  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      result.push(source[i]);
    }
  }
  return result;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without(["this", "old", "dog", "mac", "dog"], ["dog", "macaroni"]), ["this", "old", "mac"]);
assertArraysEqual(without(["loopy", "lighthouse", "loopylighthouse", "batty", "beacon", "battybeacon"], ["loopy", "batty", "lighthouse", "beacon"]), ["loopylighthouse", "battybeacon"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);



/*
const without = function(source, itemsToRemove) {
  let result = [];
  const removeItem = function(item, arrayOfItemsToRemove) { // should this item be removed?
    for (let i = 0; i < arrayOfItemsToRemove.length; i++) {
      if (item === arrayOfItemsToRemove[i]) {
        return true;
      }
    }
    return false;
  };
  
  for (let i = 0; i < source.length; i++) {
    if (!removeItem(source[i], itemsToRemove)) { // if item should not be removed
      result.push(source[i]);
    }
  }
  return result;
}

  */