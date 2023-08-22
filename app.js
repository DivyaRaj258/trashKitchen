const express = require("express");
const app = express();

//home page
app.get("/", (req, res, next) => {
    res.sendFile(__dirname + '/views/homepage.html');
});


//contact page
app.get("/contact",(req, res, next) => {
    res.sendFile(__dirname + '/views/contact.html');
});


// app.get("/contact",(request, response, next) => {
//     console.log("we received a request to CONTACT page");
//  })
app.listen(3000, () => console.log('My first app listening on port 3000!'));

