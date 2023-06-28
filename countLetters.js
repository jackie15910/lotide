const countLetters = (string) => {
  const results = {};
  for (let letter of string) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};

countLetters("lighthouse in the house");