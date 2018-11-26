/**
* A basic Hello World function
* @param {string} url url with a query string
* @returns {string}
*/
module.exports = (url, context, callback) => {
  const request = require('request');

  request.get(url, (err, res, data) => {
    if(err) console.log(err);

    data = JSON.parse(data);
    data = data["items"];
    var bestResult = data[0];
    var bestUrl = bestResult["link"];

    callback(null, bestUrl);
  });

};
