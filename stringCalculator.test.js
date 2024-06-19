const stringCalculator = require('./stringCalculator')

test('empty string', () => {
    expect(
        stringCalculator('')
     ).toBe(0)
})

test('one number', () => {
    expect(
        stringCalculator('1')
     ).toBe(1)
})

test('two number', () => {
    expect(
        stringCalculator('1,5')
     ).toBe(6)
})

test('any amount of numbers', () => {
    expect(
        stringCalculator('1,2,3,4,5')
     ).toBe(15)
})

test('\n as delimiter', () => {
    expect(
        stringCalculator('1\n2,3')
     ).toBe(6)
})

test('support any delimiter, ; as delimiter', () => {
    expect(
        stringCalculator('//;\n1;2')
     ).toBe(3)
})

test('support any delimiter, $ as delimiter', () => {
    expect(
        stringCalculator('//$\n1$2$5')
     ).toBe(8)
})

test('single negative case', () => {
    expect(
        stringCalculator('-1,2,3')
     ).toBe(0)
})

test('Multiple negative case', () => {
    expect(
        stringCalculator('-1,-2,3')
     ).toBe(0)
})

test('Ignore number bigger than 1000', () => {
    expect(
        stringCalculator('2,1001')
     ).toBe(2)
})