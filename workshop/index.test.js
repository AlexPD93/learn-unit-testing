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

test("What if year is a string?", () => {
  const expected = true;
  const actual = isLeapYear("2000");
  equal(actual, expected);
});

test("What if year is negative?", () => {
  const expected = true;
  const actual = isLeapYear(-1900);
  equal(actual, expected);
});

test(`What if year is boolean?`, () => {
  const expected = true;
  const actual = isLeapYear(true);
  equal(actual, expected);
});

test(`isLeapYear can handle multiples of 4`, () => {
  equal(isLeapYear(2020), true, "2020 is a leap year");
});

test(`isLeapYear can handle multiples of 100`, () => {
  notEqual(isLeapYear(1900), true, "1900 is not a leap year");
});

test(`isLeapYear can handle multiples of 400`, () => {
  equal(isLeapYear(1600), true, "1600 is a leap year");
});
