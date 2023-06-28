const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = (allItems,itemsToCount) => {
  const results = {};

  for (const item of allItems) { // Loops through firstNames list
    if (itemsToCount[item]) { //Checks if item on the list is True/False
      if (results[item]) { // Checks if the item is in the reults object
        results[item] += 1; //Adds 1 to the value of the object key
      } else { // If the name isn't in results
        results[item] = 1; //Creates the key and assigns the value to one
      }
    }
  }

  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);