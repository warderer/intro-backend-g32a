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

// router.get('/api/v1/pets', (req, res) => {
//     res.send(petList);
// });

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

/* QUERY */
// Son similares a PARAMS, pero se suelen usar para filtrar o buscar información. Sobre todo cuando ocupamos mandar más de un dato.
// Las QUERYs son abiertas, no definimos los nombres de los parámetros en la ruta.
// La responsabilidad del BACKEND es SOLO tomar en cuenta las querys que le interesen.
// Ejemplo Query: '/api/v1/pets?type=dog&age=3'
router.get('/api/v1/pets', (req, res) => {
    // El objeto que contiene las query es: req.query (es un objeto con todas las querys enviadas por el usuario)
    // console.log(req.query);
    const { type, age } = req.query;

    const filteredPets = petList.pets.filter(pet =>
        type && age ? pet.type === type && pet.age === parseInt(age) :
        type ? pet.type === type :
        age ? pet.age === parseInt(age) :
        true
    );

    res.send(filteredPets);
});

module.exports = router; // Exportar el router para que pueda ser usado en otro archivo