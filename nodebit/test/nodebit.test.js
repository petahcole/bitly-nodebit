const calculate = require('../calculate-minutes');
const nodebit = require('../nodebit');
const expect = require('chai').expect;

const TOKEN = '?access_token=9c2244ce569f084096f18981797ef88ddcbf240c'
let url = 'http://www.wowza.com'

describe('calculate minutes', ()  =>  {
  it('should return average minutes to complete', ()  =>  {
    expect(calculate.totalMinutes(["12:00 PM, DAY 1", "12:01 PM, DAY 1"])).to.be.equal(241);
    expect(calculate.totalMinutes(["12:00 AM, DAY 2"])).to.be.equal(960);
    expect(calculate.totalMinutes(["02:00 PM, DAY 19", "02:00 PM, DAY 20", "01:58 PM, DAY 20"])).to.be.equal(27239);
  })
})

describe('save link', ()  =>  {
  it('should return a shortened url', ()  =>  {
    nodebit.saveLink(url, TOKEN)
      .then(data  =>  {
        expect(data).to.have.property('link');
        expect(data).to.have.property('aggregate_link');
        expect(data).to.have.property('long_url');
        expect(data).to.have.property('new_link');
      })
    })
  })

describe('link history', ()  =>  {
  it('return link history', ()  =>  {
    nodebit.getLinkHistory(TOKEN)
      .then(data  =>  {
        expect(data).to.have.property('link_history');
        expect(data).to.have.property('result_count');
      })
    })
  })

describe('get clicks', ()  =>  {
  it('return clicks from user', ()  =>  {
    nodebit.getClicks(TOKEN)
      .then(data  =>  {
        expect(data).to.have.property('days');
        expect(data).to.have.property('total-clicks');
        expect(data).to.have.property('clicks');
      })
    })
  })
