// #1 Llamar a la biblioteca de express (importala)
const express = require('express'); // import en Common JS (CJS)

// #2a Crear una instancia de express
const app = express();

// #2b Configurar mi instancia de express
app.use(express.json()); // Decirle a express que vamos a usar JSON por defecto.
app.use(express.urlencoded({ extended: true })); // Ayuda a express a entender los datos que vienen de un formulario.

// #3 Crear o definir las rutas de mi servidor.
app.get('/', (req, res) => {
  res.send('Hola mundo');
});

// #4 Levantar el servidor en un puerto, por ejemplo el 3000
app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000 🚀');
});