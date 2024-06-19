let functionInvokeCount = 0
const add = (numbers) => {
    functionInvokeCount++
    //console.log({ functionInvokeCount})
  let isNegativePresent = false;
  let delimiter = ",";
  if (numbers.includes("//")) {
    delimiter = numbers[2];
    numbers = numbers.slice(3);
  }
  if (numbers.includes("\n")) {
    numbers = numbers.replaceAll("\n", delimiter);
  }
  const nums = numbers.split(delimiter).map((num) => Number(num));

  nums.forEach((num) => {
    if (num < 0) {
      isNegativePresent = true;
      return;
    }
  });

  const sum = nums.reduce((acc, curr) => acc + curr, 0);

  let negativeNumbers = [];

  try {
    if (isNegativePresent) {
      negativeNumbers = nums.filter((num) => num < 0);
      throw new Error("negatives not allowed -");
    }
  } catch (err) {
    console.error(err.message, negativeNumbers);
  }
  return !isNegativePresent ? sum : 0;
};

module.exports = add;
