const listCharacters = 'AABBCCcca';

function generatorId(length, prefix) {
  let result = '';
  let count = 1;

  for (let i = 0; i < length.length; i++) {
    if (length[i] === length[i + 1]) {
      count++;
    } else {
      result += count + length[i];
    }
  }
  return result;
}
console.log(generatorId(listCharacters));
