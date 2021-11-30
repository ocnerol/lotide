const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle')

// TEST CODE
// array length < 3
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([2]), []);
assertArraysEqual(middle([2, 84]), []);
// array length odd
assertArraysEqual(middle([0, 1, 5]), [1]);
assertArraysEqual(middle([9, 45, 33, 12, 56, 22, 12]), [12]);
assertArraysEqual(middle(["light", "house", "labs", "web", "dev", "boot", "camp", "nov", "22", "cohort", "!!!"]), ["boot"]);
// array length even
assertArraysEqual(middle([2, 45, 12, 33]), [45, 12]);
assertArraysEqual(middle([2, 3, 4, 5, 2, 4, 67, 112, 22, 45]), [2, 4]);
assertArraysEqual(middle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), [5, 6]);
