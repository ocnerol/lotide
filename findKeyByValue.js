const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const findKeyByValue = function(obj, val) {
  // LOGIC
  // declare result variable
  // loop through obj using for..in loop
  // for each key, see if its property is equal to given val
  // if so,
  // assign result to current key
  // return result
  // after the loop, return result

  let result;
  for (let key in obj) {
    if (obj[key] === val) {
      result = key;
      return result;
    }
  }
  return result;
};

const bestTVShowsByGenre = {
  'sci-fi': 'The Expanse',
  'comedy': 'Brooklyn Nine-Nine',
  'drama': 'The Wire'
};

assertEqual(findKeyByValue(bestTVShowsByGenre, 'Brooklyn Nine-Nine'), 'comedy');
assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Expanse'), 'sci-fi');
assertEqual(findKeyByValue(bestTVShowsByGenre, 'That 70\'s Show'), undefined);