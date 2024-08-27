/* MODELO */
// El modelo trae los datos de la base de datos.
// NO se encarga de validar datos ni resolver promesas (eso es trabajo del controlador en MVC).

// #1 Necesito traer la configuración del entorno de knex y su información de conexión a la base de datos.
const knex = require('../config')

// #2 Crear funciones que permitan interactuar con la base de datos.

// CRUD

// CREATE
const create = (bodyHome) => {
  return knex
    .insert(bodyHome) // ¿Qué datos voy a insertar?
    .into('homes') // ¿En qué tabla?
    .returning(['house_id', 'title', 'description', 'guest', 'address', 'rental_price', 'active', 'created_at']) // ¿Qué datos quiero que me devuelva?
}

// READ
const findAll = () => {
  return knex
    .select('*')
    .from('homes')
    .where('active', true)
}

const findOne = (houseId) => {
  return knex
    .select('*')
    .from('homes')
    .where('house_id', houseId)
    .where('active', true)
}

// UPDATE

// DELETE

// #3 Exportar las funciones para que sean accesibles desde el controlador.
module.exports = {
  create,
  findAll,
  findOne
}
