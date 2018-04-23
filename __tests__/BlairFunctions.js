module.exports = {
    createTime: function(timeInput, dateInput) {
        if(!timeInput) return false
        if(!dateInput) return false
        let stringDate = dateInput.toString()
        let firstHalf = stringDate.substr(0, 16)
        let secondHalf = stringDate.substr(21, stringDate.length - 1)
        let correctTime = firstHalf + timeInput + secondHalf;
        let milliseconds = new Date(correctTime).getTime()
        return milliseconds
    },
    createStringDate: function(dateInput) {
        let stringDate = dateInput.toString()
        return stringDate        
    },
}