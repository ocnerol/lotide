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

const middle = function(arr) {
  let result = [];
  if (arr.length < 3) {
    return result;
  }
  if (arr.length % 2 !== 0) { // array length is odd
    const middleItem = arr[Math.floor(arr.length / 2)];
    result.push(middleItem);
  } else { // array length is even
    const start = (arr.length / 2) - 1;
    const end = (arr.length / 2);
    const firstMiddleItem = arr[start];
    const secondMiddleItem = arr[end];
    result.push(firstMiddleItem, secondMiddleItem);
  }
  return result;
}



// tests
// array length < 3
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([2]), []);
assertArraysEqual(middle([2, 84]), []);
// array length oddd
assertArraysEqual(middle([0, 1, 5]), [1]);
assertArraysEqual(middle([9, 45, 33, 12, 56, 22, 12]), [12]);
assertArraysEqual(middle(["light", "house", "labs", "web", "dev", "boot", "camp", "nov", "22", "cohort", "!!!"]), ["boot"]);
// array length even
assertArraysEqual(middle([2, 45, 12, 33]), [45, 12]);
assertArraysEqual(middle([2, 3, 4, 5, 2, 4, 67, 112, 22, 45]), [2, 4]);
assertArraysEqual(middle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), [5, 6]);
