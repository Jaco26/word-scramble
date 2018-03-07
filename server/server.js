const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const gameHistoryRouter = require('./routes/game-history');

app.use(bodyParser.json());

app.use('/games', gameHistoryRouter);

app.use(express.static('server/public'));

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Server ready on port:', port);
});