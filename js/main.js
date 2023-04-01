function getRandomNumber(min, max) {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (max < min) {
    [min, max] = [max, min]
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNumber(1, 10));

function getRandomNumber2(min, max, amount) {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (max < min) {
    [min, max] = [max, min]
  }

  return +Math.random(min, max).toFixed(amount);
}

console.log(getRandomNumber2(0, 1, 2));
