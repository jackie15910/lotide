const eqArrays = function(firstArray, secondArray) {
  if (firstArray === secondArray) {
    return true;
  }
  if (firstArray.length !== secondArray.length) {
    return false;
  }
  if (firstArray === null || secondArray === null) {
    return false;
  }
  let result = true;
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  } return result;
};

module.exports = eqArrays;