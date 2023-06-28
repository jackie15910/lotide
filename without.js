const without = function(source,itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < itemsToRemove.length; i++) {
    let remove = source.indexOf(itemsToRemove[i])
    if (remove !== -1){ // the element is found in source
      source.splice(remove, 1)
      newArray = source;
    }
  }
  return newArray;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]