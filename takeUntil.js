const assertEqual = function(firstArray, secondArray) {
  let result = eqArrays(firstArray, secondArray);
  if (result === true) {
    console.log(`✅✅✅ Assertion Passed: ${firstArray} === ${secondArray}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${firstArray} !== ${secondArray}`);
  }
};

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

const takeUntil = function(dataArray, operation) {
  let newArray = [];
  for (let i = 0; i < dataArray.length; i++) {
    if (!operation(dataArray[i])) {
      newArray.push(dataArray[i]);
    } else {
      return newArray;
    }
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

/* console.log(results1); */

assertEqual(results1, [ 1, 2, 5, 7, 2 ]);

/* const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2); */

