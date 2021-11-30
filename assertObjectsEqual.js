const eqObjects = function(object1, object2) {
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

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (let key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { // are the keys with same key name in both objects arrays?
      if (!eqArrays(object1[key], object2[key])) { // if arrays are not equal
        return false;
      }
    } else if (object1[key] !== object2[key]) {// if property of a given key in obj1 !==  property of key with same name in obj2
      return false;
    }
  }

  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log((`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`));
  }
};

module.exports = assertObjectsEqual;

// const abe = { a: '1', b: '2', e: 5 };
// const bea = { b: '2', e: 5, a: '1' };

// assertObjectsEqual(abe, bea); // => assertion pass

// const cd = { c: '1', d: ['2', 3]};
// const dc = { d: ['2', 3], c: '1'};
// const cd2 = { c: '1', d: ['2', 3, 4]};

// assertObjectsEqual(cd, dc); // => assertion pass

// assertObjectsEqual(dc, cd2); // => assertion fail