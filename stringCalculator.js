const add = (numbers) => {
    if(numbers.includes('\n')){
        numbers = numbers.replaceAll('\n', ',')
    }
    const nums = numbers.split(',').map((num) => Number(num))
    const sum = nums.reduce((acc, curr) => acc + curr, 0)
    return sum
}


module.exports = add

