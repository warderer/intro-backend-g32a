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

/* PARAMS */
// Obtener parametros de una ruta dinámica (una mascota)
// Ejemplo Params: '/api/v1/pets/1'
// Para indicar que un valor es dinámico, se usa ':' antes del nombre del parámetro, es decir: '/api/v1/pets/:petId'
router.get('/api/v1/pets/:petId', (req, res) => {
    const petId = req.params.petId; // Obtener el valor del parámetro
    const pet = petList.pets.find(pet => pet.id == petId); // Buscar la mascota con el id
    if (pet) {
        res.send(pet);
    } else {
        res.status(404).send({ message: 'Pet not found' });
    }
});


module.exports = router; // Exportar el router para que pueda ser usado en otro archivo