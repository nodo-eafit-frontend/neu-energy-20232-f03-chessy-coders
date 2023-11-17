import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('¡Servidor en funcionamiento!');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
