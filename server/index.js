const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();

const { PORT } = process.env;

const router = require('./router'); // Importa tu router

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router); // Monta tu router en la ruta base
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });
  

app.listen(PORT, () => console.log('...running on port ' + PORT));
