// Dependiendo de la variable de entorno del sistema, se va a cambiar la configuración adecuada para la base de datos.

// Tomar la configuración del entorno de Node, y si no existe voy a usar development.

const env = process.env.NODE_ENV || 'development'

const knexfile = require('./knexfile')
const knex = require('knex')

// Mando a llamar a Knex con la configuración adecuada
module.exports = knex(knexfile[env])
