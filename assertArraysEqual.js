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
  if (firstArray === secondArray){
    return true;
  }
  if (firstArray.length !== secondArray.length){
    return false;
  }
  if (firstArray == null || secondArray == null){
    return false;
  }
  let result = true;
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return result;
}

(assertEqual([1, 2, 3], [1, 2, 3]));
(assertEqual([1, 2, 3], [3, 2, 1]));
(assertEqual(["1", "2", "3"], ["1", "2", "3"]));
(assertEqual(["1", "2", "3"], ["1", "2", 3]));