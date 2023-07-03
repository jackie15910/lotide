const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([5,6,7]), 5); //Pass
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //Pass
console.log(head([])); //undefined
console.log(head([1])); //1