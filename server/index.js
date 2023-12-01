const router = require('./router');

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();

const { PORT } = process.env;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(PORT, () => console.log('...running on port ' + PORT));
