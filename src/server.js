// filepath: c:\Users\andre\Escritorio\ICSF\ICSF\src\server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Sirve archivos estáticos (como un index.html si lo tuvieras)
app.use(express.static(path.join(__dirname, '../public')));

// Una ruta de ejemplo para que el servidor responda algo
app.get('/', (req, res) => {
  res.send('Servidor funcionando!');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
