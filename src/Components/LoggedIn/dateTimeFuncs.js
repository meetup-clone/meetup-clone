module.exports = {
    compareDate: function(time1, time2) {
        let date1 = new Date(time1)
        let date2 = new Date(time2)
        date1 = date1.getFullYear() + '/' + (date1.getMonth() + 1) + '/' + date1.getDate()
        date2 = date2.getFullYear() + '/' + (date2.getMonth() + 1) + '/' + date2.getDate()
        return date1 > date2
    },
    convertTime: function(milliseconds) {
        let time = new Date(milliseconds)
        let newTime = time.toLocaleTimeString()
        return newTime.substr(0, newTime.length - 6) + newTime.substr(newTime.length - 3, newTime.length - 1)
    }
}
