test(`Test makeUrl`, () => {
  const expected = "https://pokeapi.co/api/v2/pikachu";
  const actual = makeUrl("pikachu");
  equal(actual, expected);
});

test(`Test Objects have same name value`, () => {
  const expected = { name: "oliver", email: "hello@oliverjam.es" }.name;
  const actual = searchParamsToObject(
    "name=oliver&email=hello@oliverjam.es"
  ).name;
  equal(actual, expected);
});

test(`Check objects are not exactly the same`, () => {
  const expected = { name: "oliver", email: "hello@oliverjam.es" };
  const actual = searchParamsToObject(`name=oliver&email=hello@oliverjam.es"`);
  notEqual(actual, expected);
});

test(`Objects contain same email`, () => {
  const expected = { name: "oliver", email: "hello@oliverjam.es" }.email;
  const actual = searchParamsToObject(
    `name=oliver&email=hello@oliverjam.es`
  ).email;
  equal(actual, expected);
});
