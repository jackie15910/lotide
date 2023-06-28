const assertEqual = function(firstArray, secondArray){
  let result = eqArrays(firstArray, secondArray);
  if (result == true){
    console.log(`✅✅✅ Assertion Passed: ${firstArray} === ${secondArray}`)
  }
  else {
    console.log(`🛑🛑🛑 Assertion failed: ${firstArray} !== ${secondArray}`)
  }
}

const eqArrays = function(firstArray, secondArray) {
  let result;
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    } else {
      result = true;
    }
  }
  return result;
};

(assertEqual([1, 2, 3], [1, 2, 3]));
(assertEqual([1, 2, 3], [3, 2, 1]));
(assertEqual(["1", "2", "3"], ["1", "2", "3"]));
(assertEqual(["1", "2", "3"], ["1", "2", 3]));