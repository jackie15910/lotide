const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const eqObjects = function(object1, object2) {
  let firstKeys = Object.keys(object1);
  let secondKeys = Object.keys(object2);
  let result = true;
  if (firstKeys.length !== secondKeys.length) {
    return false;
  }
  for (let i = 0; i < firstKeys.length; i++) {
    let val = object2[firstKeys[i]]; // access the value in the second obj, **if** it exists
    if (val) { // if there exists a value
      if (val !== object1[firstKeys[i]]) { // check if the values are not the same at the current key
        return false;
      }
    } else {
      return false;
    }
  }
  return result;
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

assertEqual(eqObjects(shirtObject , anotherShirtObject), true);
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);