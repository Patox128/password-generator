export function getRandomChart(min: number, max: number) {
  const difference = max - min + 1;

  return String.fromCharCode(Math.floor(Math.random() * difference) + min);
}

export function getSpecialChar() {
  const specialChar = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  return specialChar.charAt(Math.floor(Math.random() * specialChar.length));
}
