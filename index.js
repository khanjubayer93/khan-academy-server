const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const port = process.env.PORT || 5000;

const courses = require('./Data/fakedata.json');
console.log(courses)

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const course = courses?.find((crs) => crs?.id == id);
    res.send(course);
});

app.get('/course/:name', (req, res) => {
    const name = req.params.name;
    const getCourseName = courses?.filter((c) => c?.name == name)
    res.send(getCourseName);
})

app.get('/', (req, res) => {
    res.send('khan academy server running on port')
})






app.listen(port, () => {
    console.log('khan academy server running on port')
})

module.exports = app;