const add = (numbers) => {
    const nums = numbers.split(',').map((num) => Number(num))
    const sum = nums.reduce((acc, curr) => acc + curr, 0)
    return sum
}


module.exports = add