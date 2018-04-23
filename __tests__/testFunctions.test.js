const fns = require('./testFunctions')

describe('Time Checking', () => {
    test('timeInput exists', () => {
        expect(fns.createTime('')).toBeFalsy()
    })
    test('dateInput exists', () => {
        expect(fns.createTime('')).toBeFalsy()
    })
    test('createTime returns a number', () => {
        expect(typeof fns.createTime('19:00' ,new Date(1527685200000))).toEqual('number')
    })
    test('stringDate should equal ', () => {
        expect(fns.createTime('19:00' ,new Date(1527685200000))).toEqual(1527728400000)
    })
})

describe('StringDate', () => {
    test('stringDate checking: ', () => {
        expect(fns.createStringDate(new Date(1527685200000))).toEqual("Wed May 30 2018 07:00:00 GMT-0600 (Mountain Daylight Time)")
    })
    test('typeof createStringDate is a string: ', () => {
        expect(typeof fns.createStringDate(new Date(1527685200000))).toEqual("string")
    })
})

describe('FirstHalf', () => {
    test('createFirstHalf checking: ', () => {
        expect(fns.createFirstHalf(new Date(1527685200000))).toEqual("Wed May 30 2018 ")
    })
    test('typeof createFirstHalf is a string: ', () => {
        expect(typeof fns.createFirstHalf(new Date(1527685200000))).toEqual("string")
    })
})

describe('SecondHalf', () => {
    test('createSecondHalf checking: ', () => {
        expect(fns.createSecondHalf(new Date(1527685200000))).toEqual(":00 GMT-0600 (Mountain Daylight Time)")
    })
    test('typeof createSecondHalf is a string: ', () => {
        expect(typeof fns.createSecondHalf(new Date(1527685200000))).toEqual("string")
    })
})