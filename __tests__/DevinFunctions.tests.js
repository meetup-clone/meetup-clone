const dateTimeFuncs = require('../src/Components/LoggedIn/dateTimeFuncs.js')
const { compareDate, convertTime } = dateTimeFuncs

describe('Compare Date Tests', () => {
    test('timeInput exists', () => {
        expect(compareDate(1524500326516, )).toBeFalsy()
    })
    test('should pass test with @ symbol', () => {
        expect(compareDate(1524500326516, )).toBeTruthy()
    })
    test('should not pass test with @ symbol', () => {
        expect(compareDate(1524500326516, )).toBeFalsy()
    })
})

describe('Convert Time Tests', () => {
    test('timeInput exists', () => {
        expect(convertTime(1524500326516)).toBeFalsy()
    })
    test('should pass test with @ symbol', () => {
        expect(convertTime(1524500326516)).toBeTruthy()
    })
    test('should not pass test with @ symbol', () => {
        expect(convertTime(1524500326516)).toBeFalsy()
    })
})
