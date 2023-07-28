const server = require('./src/server');
const db = require('./src/config/db');
const preloadData = require('./src/libs/preloadData');
require('dotenv').config();

// Conectar la base de datos
db.authenticate()
  .then(() => {
    console.log('Base de datos conectada');
  })
  .catch(error => {
    console.log(error);
  })

const PORT = process.env.PORT || 3001;

// Sincronizar modelos y arrancar servidor
db.sync({ force: false }).then(() => {
  // Precarga de datos
  preloadData();
  server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`); // eslint-disable-line no-console
  })
});
