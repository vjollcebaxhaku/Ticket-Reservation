const express = require('express');
const bodyParser = require('body-parser');
const routesHandler = require('./routes/handler.js');
const cors = require('cors');

const app = express();

// Parse incoming requests with JSON payloads
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Route handling
app.use('/', routesHandler);

const PORT = 4000; // Backend routing port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
