
const request = require('request-promise');


const SAVELINK_URL = 'https://api-ssl.bitly.com/v3/user/link_save';
const LINKHIST_URL = 'https://api-ssl.bitly.com/v3/user/link_history';
const CLICKS_URL = 'https://api-ssl.bitly.com/v3/user/clicks';

  function saveLink(link, token)  {
    let options = {
      uri: SAVELINK_URL,
      qs: {
          access_token: token,
          longUrl: link
          },
      json: true
    };
    return request(options)
      .then(data  =>  {
        console.log(data);
      })
      .catch(err  =>  {
        console.log(err);
      })
  }

  function getLinkHistory(token)  {
    let options = {
      uri: LINKHIST_URL,
      qs: {
          access_token: token,
          },
      json: true
    };
    return request(options)
      .then(data  =>  {
        console.log(data);
      })
      .catch(err  =>  {
        console.log(err);
      })
  }

  function getClicks(token)  {
    let options = {
      uri: CLICKS_URL,
      qs: {
          access_token: token,
          },
      json: true
    };
    return request(options)
      .then(data  =>  {
        console.log(data);
      })
      .catch(err  =>  {
        console.log(err);
      })
  }

  //THESE WERE THE FUNCTIONS BEFORE I USED REQUEST-PROMISE
    //BEFORE I WAS JUST USING REQUEST

  // function saveLink(link, token)  {
  //   let LONG_URL = '&longUrl=' + link
  //   let url = SAVELINK_URL + token + LONG_URL
  //   console.log(url);
  //   return new Promise((resolve, reject) =>  {
  //     request(url, (err, res, body) =>  {
  //       if(!err)  {
  //         resolve(JSON.parse(body))
  //       } else {
  //         reject(err)
  //       }
  //     });
  //   });
  // };
  //
  // function getLinkHistory(token) {
  //   let url = LINKHIST_URL + token;
  //   return new Promise((resolve, reject)  =>  {
  //     request(url, (err, res, body) =>  {
  //       if(!err)  {
  //         resolve(JSON.parse(body))
  //       } else {
  //         reject(err)
  //       }
  //     })
  //   })
  // };
  //
  // function getClicks(token)  {
  //   let url = CLICKS_URL + token;
  //   return new Promise((resolve, reject)  =>  {
  //     request(url, (err, res, body) =>  {
  //       if(!err)  {
  //         resolve(JSON.parse(body))
  //       } else {
  //         reject(err)
  //       }
  //     })
  //   })
  // }

module.exports = {
  saveLink,
  getLinkHistory,
  getClicks
}
