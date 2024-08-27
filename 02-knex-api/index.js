// #1 Importar Express
const express = require('express')

const PORT = process.env.PORT || 3000

// #2 Crear una instancia de Express
const app = express()

// #3 Configurar Express para que entienda JSON y datos de formularios
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// #4 Crear o definir mis rutas

// #5 Levantar el servidor escuchando en un puerto, por ejemplo el 3000
app.listen(PORT, () => {
  console.log('Servidor escuchando en http://localhost:3000 🚀')
})
