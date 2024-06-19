let functionInvokeCount = 0
const add = (numbers) => {
    functionInvokeCount++
    //console.log({ functionInvokeCount})
  let isNegativePresent = false;
  let delimiter = ",";
  if (numbers.includes("//")) {
    if(numbers[2] !== '['){
        delimiter = numbers[2];
        numbers = numbers.slice(3);
        console.log(numbers)
    } else {
        numbers = numbers.slice(2);
        let del = ''
        let i = 1
        while(numbers[i] !== ']'){
            del+=numbers[i]
            i++
        }
        delimiter = del
        numbers = numbers.slice(i);
    }
 
  }
  if (numbers.includes("\n")) {
    numbers = numbers.replaceAll("\n", delimiter);
  }
  const nums = numbers.split(delimiter).map((num) => Number(num)).filter((num) => num <= 1000)

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

