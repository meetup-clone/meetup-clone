const fns = require('./BlairFunctions')

describe('Time Checking', () => {
    test('timeInput exists', () => {
        expect(fns.createTime('')).toBeFalsy()
    })
    test('dateInput exists', () => {
        expect(fns.createTime('')).toBeFalsy()
    })
    test('stringDate should equal ', () => {
        expect(fns.createTime('19:00' ,Date(1527685200000))).toEqual(1524531617000)
    })
})

describe('Time Checking', () => {
    test('timeInput exists', () => {
        expect(fns.createTime('')).toBeFalsy()
    })
    test('dateInput exists', () => {
        expect(fns.createTime('')).toBeFalsy()
    })
    test('stringDate should equal ', () => {
        expect(fns.createTime('19:00' ,Date(1527685200000))).toEqual(1524531617000)
    })
})