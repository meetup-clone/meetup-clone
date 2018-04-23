const fns = require('./BlairFunctions')

describe('Time Checking', () => {
    test('timeInput exists', () => {
        expect(fns.emailCheck('')).toBeFalsy()
    })
    test('should pass test with @ symbol', () => {
        expect(fns.emailCheck('joe@.com')).toBeTruthy()
    })
    test('should not pass test with @ symbol', () => {
        expect(fns.emailCheck('joe.com')).toBeFalsy()
    })
})