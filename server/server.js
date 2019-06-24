const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = 3000

const app = express()

app.use(cors());
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Hello from CORS - enabled Node Express Server');
})

app.post('/enroll', function (req, res) {
    console.log(req.body);
    res.send({"message": "Data received"});
})

app.listen(PORT, function () {
    console.log('CORS enable Express server listening on port ' + PORT + '!');
})
