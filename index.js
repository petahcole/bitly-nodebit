let calculate = require('./calculate-minutes')



console.log(calculate.totalMinutes(["12:00 PM, DAY 1", "12:01 PM, DAY 1"]))
console.log(calculate.totalMinutes(["12:00 AM, DAY 2"]))
console.log(calculate.totalMinutes(["02:00 PM, DAY 19", "02:00 PM, DAY 20", "01:58 PM, DAY 20"]))
