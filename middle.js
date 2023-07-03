const middle = (array) => {
  let newArray = [];
  if (array.length <= 2) { // array length 2 or less
    return newArray;
  } else { // array length more than 2
    if (array.length % 2 === 0) { // even
      newArray.push(array[(array.length / 2) - 1]);
      newArray.push(array[(array.length / 2)]);
    } else {
      newArray.push(array[(array.length - 1) / 2]);
    }
    return newArray;
  }
};

module.exports = middle;