const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

/*
findKey:
scan the object and return the first key for which the callback returns a truthy value.
If no key is found, then it should return undefined.

--logic
loop through obj using for..in loop
for each key in the object,
check if the predicate callback returns truthy for it
if true, return key
end loop
(no else and no return outside the for loop)
*/
const findKey = function(obj, callback) {
  for (let key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
};

const givenExample = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);

assertEqual(givenExample, "noma");

const animalSounds = {
  cow: 'moo',
  cat: 'meow',
  dog: 'woof',
  horse: 'neigh',
  sheep: 'baah',
  pig: 'oink'
};

const returnsSheep = findKey(animalSounds, k => k === 'baah');
assertEqual(returnsSheep, 'sheep');

const olympians = {
  dionysus: { symbol: 'grapes' },
  prometheus: { symbol: 'fire' },
  poseidon:
  { symbol: 'trident',
    personalInfo: { residence: 'ocean'}
  },
  zeus: { symbol: 'thunderbolt' },
  hades: { symbol: 'helm of death' }
};

const returnsHades = findKey(olympians, god => god.symbol === 'helm of death');
assertEqual(returnsHades, 'hades');

const returnsPoseidon = findKey(olympians, god => god.personalInfo && god.personalInfo.residence === 'ocean');
assertEqual(returnsPoseidon, 'poseidon');