const countLetters = (string) => {
  const results = {}
  for (letter of string){
    if (letter !== " "){
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  console.log(results);
}

countLetters("lighthouse in the house");