const express = require('express');
const watsonFuncs = require('./watsonFuncs');
const bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.post('/api/keywords', (req, res)=>{
    console.log("POST");
    
    watsonFuncs(req.body.text, (list) => {
        res.json({list});
    });
});

app.listen(8081, () => {
    console.log("Listening on 8081");
});