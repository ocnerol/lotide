# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ocnerol/lotide`

**Require it:**

`const _ = require('@ocnerl/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns the first element from a given array, or undefined if given an empty array
* `tail(array)`: returns all elements except the first from a given array, or an empty array if given an empty array
* `eqArrays(array1, array2)`: returns true if given arrays are strictly equal
* `without(array, unwantedItemsArray)`: returns a subset of given array, removing unwanted elements (those in unwantedItems)
* `middle(array)`: returns the middle-most element(s) of the given array
* `countOnly(array, object)`: returns an object containing counts of each key with a value of true listed in the input object that are found in input array
* `countLetters(string)`: returns an object where each key represents a letter in the input string and the corresponding value represents the frequency of that letter in the input string
* `letterPositions(string)`: returns an object where each key represents a letter in the input string and the corresponding value represents the indices that letter can be found in the input string
* `findKeyByValue(object, value)`: returns the first key which contains the given value; if value cannot be found in the object, returns undefined
* `eqObjects(object1, object2)`: returns true if given objects are a perfect match, otherwise returns false
* `map(array, callbackFn)`: returns a new array where each element corresponds to the result of callbackFn on an element in the input array with the same index
* `takeUntil(array, callbackFn)`: returns a subset of the array with elements taken from the beginning until the callback returns a truthy value
* `findKey(object, callbackFn)`: returns the first key for which the callbackFn returns a truthy value; if no key is found, returns undefined