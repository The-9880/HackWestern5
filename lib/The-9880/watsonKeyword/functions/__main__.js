/**
* A basic Hello World function
* @param {string} analysisText Who you're saying hello to
* @returns {Array}
*/
module.exports = (analysisText, context, callback) => {
  const NLU = require('watson-developer-cloud/natural-language-understanding/v1');

  var nlu = new NLU({
    version: '2018-04-05',
    iam_apikey:"VrM2ddGdHEOp_vfdLCm6S8C5eKFqMGx2Kk8jdM9evuV8",
    url: 'https://gateway-syd.watsonplatform.net/natural-language-understanding/api'
  });
  
  var parameters = {
    'text':analysisText,
    'features':{
      'concepts': {},
      'keywords': {}
    }
  };

  var keywordsList = []; // list of keywords.

  nlu.analyze(parameters, (err, res) => {
    if(err) console.log(err);
    else
    {
      // console.log(JSON.stringify(res, null, 2));
      keywordsList.push(JSON.stringify(res.concepts[0].text));

      for(var x of res.keywords)
      {
        console.log(x);
        keywordsList.push(x.text)
      }

      callback(null, keywordsList);
    }
  });


 

};
