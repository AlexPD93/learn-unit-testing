function makeUrl(name) {
  return "https://pokeapi.co/api/v2/" + name;
}

function searchParamsToObject(string) {
  let words = string.split("&");
  let obj = {};
  for (let i = 0; i < words.length; i++) {
    const keys = words[i].split("=")[0];
    const values = words[i].split("=")[1];
    obj[keys] = values;
  }
  return obj;
}

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
    return true;
  } else {
    return new Error(`${year} is not a leap year`);
  }
}
