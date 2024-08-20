const express = require('express');
// Importar el router de express para manejar rutas
const router = express.Router(); // Manejador de rutas

const petList = {
    "pets": [
        {
            "id": 1,
            "name": "Firulais",
            "age": 3,
            "type": "dog"
        },
        {
            "id": 2,
            "name": "Michi",
            "age": 2,
            "type": "cat"
        },
        {
            "id": 3,
            "name": "Scooby Doo",
            "age": 6,
            "type": "dog"
        },
    ]
}

// Definir una ruta para obtener la lista de mascotas

router.get('/api/v1/pets', (req, res) => {
    res.send(petList);
});

module.exports = router; // Exportar el router para que pueda ser usado en otro archivo