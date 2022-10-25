const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const port = process.env.PORT || 5000;

// get data from fakedata
const courses = require('./Data/fakedata.json');
console.log(courses)

// get all course
app.get('/courses', (req, res) => {
    res.send(courses)
})


// sest sutup 
app.get('/', (req, res) => {
    res.send('khan academy server running on port')
})


app.listen(port, () => {
    console.log('khan academy server running on port')
})

module.exports = app;