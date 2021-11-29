const assertEqual = require('../assertEqual');

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp"); // fails
assertEqual(1, 1); // passes
assertEqual(2.00, 2); // passes
assertEqual(5, "5"); // fails
assertEqual("dog", "dog"); // passes
assertEqual("kitten", "kitteN"); // fails
assertEqual(34.01, 34.00); // fails