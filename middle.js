
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
};

module.exports = middle;
