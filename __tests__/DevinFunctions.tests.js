const dateTimeFuncs = require('../src/Components/LoggedIn/dateTimeFuncs.js')
const { compareDate, convertTime } = dateTimeFuncs

describe('Compare Date Tests', () => {
    test('compareDate should return a boolean', () => {
        expect(typeof compareDate(1525154400000, 1524500326516)).toBe('boolean')
    })
    test('compareDate first date larger returns true', () => {
        expect(compareDate(1525154400000, 1524500326516)).toBeTruthy()
    })
    test('compareDate first date larger returns false', () => {
        expect(compareDate(1524500326516, 1525154400000)).toBeFalsy()
    })
    test('compareDate two equal dates return false', () => {
        expect(compareDate(1525154400000, 1525154400000)).toBeFalsy()
    })
})

describe('Convert Time Tests', () => {
    test('convertTime should return a string', () => {
        expect(typeof convertTime(1525154400000)).toBe('string')
    })
    test('convertTime should return 10:46', () => {
        expect(convertTime(1524500326516)).toEqual('10:46')
    })
    test('convertTime should return 00:00', () => {
        expect(convertTime(1525154400000)).toEqual('00:00')
    })
})
