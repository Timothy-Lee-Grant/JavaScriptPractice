const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

app.get('/', (req,res)=>{
    //res.send("Hello?");
    //res.sendFile(path.join( __dirname, 'standard_page.html'));
    const data = {title:"My Test Title", name: "Something is here"}
    res.render('my_sample_html', data);
});

app.listen(PORT, ()=>{
console.log("listening right now");
}); 

