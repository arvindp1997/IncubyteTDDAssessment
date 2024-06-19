const add = (numbers) => {
    let delimiter = ','
    if(numbers.includes('//')){
        delimiter=numbers[2]
        numbers=numbers.slice(3)
    }
    if(numbers.includes('\n')){
        numbers = numbers.replaceAll('\n', delimiter)
    }
    const nums = numbers.split(delimiter).map((num) => Number(num))
    const sum = nums.reduce((acc, curr) => acc + curr, 0)
    return sum
}


module.exports = add



