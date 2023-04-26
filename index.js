const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/past'));
// app.use(express.static(__dirname + '/WADAWebsite'));

const server = app.listen(3002, () => {
    console.log(`Express running → PORT ${server.address().port}, dirname → ${__dirname}`);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})
