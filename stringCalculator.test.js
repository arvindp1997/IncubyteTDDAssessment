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
