const assertEqual = require('../assertEqual');
const head = require('../head');

// TEST CODE
assertEqual(head([]), undefined);
assertEqual(head([]), null);
assertEqual(head([3]), 3);
assertEqual(head(["this", "old", "dog"]), "old");
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");