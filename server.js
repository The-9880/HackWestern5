const express = require('express');
const watsonFuncs = require('./watsonFuncs');
const bodyParser = require('body-parser');
const request = require('request');

var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.post('/api/keywords', (req, res)=>{
    console.log("POST");
    
    watsonFuncs(req.body.text, (list) => {
        res.json({list});
    });
});

app.post('/api/query', (req, res) => {
    var arg = req.body.url;

    console.log(arg);

    request.get(arg, (err, response, data) => {
    if(err) console.log(err);

    data = JSON.parse(data);
    data = data["items"];
    var bestResult = data[0];
    var bestUrl = bestResult["link"];

    res.send(String(bestUrl));
  });

});

app.listen(8081, () => {
    console.log("Listening on 8081");
});