# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jackie15910/lotide`

**Require it:**

`const _ = require('@jackie15910/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

`assertArraysEqual()`: checks if two arrays are the same
`assertEqual()`: checks if two parameters are the same
`assertObjectsEqual()`: checks if two objects are the
`eqObjects()`: Checks if objects are equal
`eqArrays()`: Checks if arrays are equal
`countLetters()`: Counts the ammount of times each letter in a string appears
`countOnly()`: Counts the times ana approved string appears in an object
`findKey()`: finds a key with a given key+value
`findKeyByValue()`: finds a key with a given value
`letterPositions()`: returns an object with letter keys and array of each index the letter appears
`takeUntil()`: Adds numbers to an array until a condition is met
`without()`: Removes a given element from an array
`map()`: Returns the first letter of string in an array
`head()`: return the first in an array
`tail()`: return everything after the first
`middle()`: returns the middle element in an array