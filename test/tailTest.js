const assertEqual = require('../assertEqual');
const tail = require('../tail');

// Test case: check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(words.length, 3); // pass
assertEqual(tail(words).length, 3); // fail
assertEqual(tail(words).length, 1); // fail
assertEqual(tail(words).length, 2); // pass
assertEqual(tail([]).length, 0); // pass
assertEqual(tail(["dog"]).length, 0); // pass