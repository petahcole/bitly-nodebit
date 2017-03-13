module.exports = {

  totalMinutes: function(array)  {
    let times = []
    array.forEach(time  =>  {
      times.push(parseTime(time))
    })
    return Math.round(times.reduce((sum, a) =>  {
      return sum + a
    }, 0)/times.length)
  }
}

  function parseTime(str) {
    let filter = /[':', ',', ' ']+/g;
    let parsedTime = str.replace(filter, ' ').split(' ');
    let hour = parsedTime[0] * 60;
    let minute = parsedTime[1] * 1;
    let day = parsedTime[4];

    if (parsedTime[2] == 'PM' && day == 1) {
      day = (day * 24 * 60) - 1200 - hour
    } else if (parsedTime[2] == 'PM') {
      day = (day * 24 * 60) - 1200
    } else {
      day = (day * 12 * 60) - 1200
    }
    return hour + minute + day;

  }
