const assertArraysEqual = require('../assertArraysEqual.js');


// TEST CODE
assertArraysEqual([1,2,3],[1,2,3]); //  => true
assertArraysEqual([1,3,3],[1,2,3]); //  => false
assertArraysEqual(["lighthouse", "labs", "web"],["lighthouse", "labs", "web"]); //  => true
assertArraysEqual(["0", "1", "2"],["0", "1", 2]); //  => false