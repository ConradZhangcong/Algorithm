const vowelMap = {
  a: true,
  e: true,
  i: true,
  o: true,
  u: true,
};

function vowelStrings(words: string[], left: number, right: number): number {
  let count = 0;
  for (let i = left; i <= right; i++) {
    const word = words[i];
    if (vowelMap[word[0]] && vowelMap[word[word.length - 1]]) {
      count++;
    }
  }

  return count;
}
