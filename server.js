const express = require('express');


var app = express();

app.get('/api', (req, res)=>{
    console.log('GET request');
    res.json({message: "Got it!"});
});

app.listen(8081, () => {
    console.log("Listening on 8081");
});