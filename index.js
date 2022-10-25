const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const port = process.env.PORT || 5000;

// sest sutup 
app.get('/', (req, res) => {
    res.send('khan academy server running on port')
})


app.listen(port, () => {
    console.log('khan academy server running on port')
})

module.exports = app;