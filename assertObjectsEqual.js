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

const assertObjectsEqual = function(firstObject, secondObject) {
  const inspect = require("util").inspect;
  let result = eqObjects(firstObject, secondObject);
  if (result === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(firstObject)} === ${inspect(secondObject)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${firstObject} !== ${secondObject}`);
  }

};
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertObjectsEqual(shirtObject, anotherShirtObject);