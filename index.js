let calculate = require('./nodebit/calculate-minutes')
let nodebit = require('./nodebit/nodebit')

const TOKEN = '9c2244ce569f084096f18981797ef88ddcbf240c';


calculate.totalMinutes(["12:00 PM, DAY 1", "12:01 PM, DAY 1"])
calculate.totalMinutes(["12:00 AM, DAY 2"])
calculate.totalMinutes(["02:00 PM, DAY 19", "02:00 PM, DAY 20", "01:58 PM, DAY 20"])

nodebit.saveLink('http://www.wowza.com', TOKEN)
  .then(data  =>  {
    console.log(data);
  })
nodebit.getLinkHistory(TOKEN)
  .then(data  =>  {
    console.log(data);
  })
nodebit.getClicks(TOKEN)
  .then(data  =>  {
    console.log(data);
  })
