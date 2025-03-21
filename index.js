const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

app.get('/', (req,res)=>{
    //res.send("Hello?");
    res.sendFile(path.join( __dirname, 'standard_page.html'));
});

app.listen(PORT, ()=>{
console.log("listening right now");
});

