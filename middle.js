const middle = (array) => {
  let newArray = []
  if (array.length <= 2){ // array length 2 or less
    return newArray;
  } else { // array length more than 2
    if (array.length % 2 === 0) { // even
      newArray.push(array[(array.length / 2) - 1]);
      newArray.push(array[(array.length / 2)]);
    }
    else {
      newArray.push(array[(array.length - 1) / 2]);
    }
    return newArray
  }
}

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

assertEqual(middle([1]), []);
assertEqual(middle([1, 2]), []);
assertEqual(middle([1, 2, 3]), [2]);
assertEqual(middle([1, 2, 3, 4, 5]), [3]);
assertEqual(middle([1, 2, 3, 4]), [2, 3]);
assertEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);