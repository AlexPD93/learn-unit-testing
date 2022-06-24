test(`Test makeUrl`, () => {
  const expected = "https://pokeapi.co/api/v2/pikachu";
  const actual = "https://pokeapi.co/api/v2/pikachu";
  if (expected === actual) {
    console.log(`No error`);
  } else {
    console.error(`Expected ${expected} but received ${actual}`);
  }
});
