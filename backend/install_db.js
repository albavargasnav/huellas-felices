'use strict'

require('dotenv').config()

const { mongoose, connectMongoose, Anuncio, Usuario } = require('./models')

const ANUNCIOS_JSON = './anuncios.json'
require('./lib/i18nSetup')

main().catch(err => console.error('Error!', err))

async function main () {

  await connectMongoose

  const anunciosResult = await initAnuncios(ANUNCIOS_JSON)
  console.log(`\nAnuncios: Deleted ${anunciosResult.deletedCount}, loaded ${anunciosResult.loadedCount} from ${ANUNCIOS_JSON}`)

  const usuariosResult = await initUsuarios()
  console.log(`\nUsuarios: Deleted ${usuariosResult.deletedCount}, loaded ${usuariosResult.loadedCount.length}`)

  await mongoose.connection.close()
  console.log('\nDone.')
  return process.exit(0)
}

async function initAnuncios (fichero) {
  const { deletedCount } = await Anuncio.deleteMany()
  const loadedCount = await Anuncio.cargaJson(fichero)
  return { deletedCount, loadedCount }
}

async function initUsuarios () {
  const { deletedCount } = await Usuario.deleteMany()
  const loadedCount = await Usuario.insertMany([
    {name: 'user', email: 'user@example.com', password: await Usuario.hashPassword('1234'), direccion: 'calle falsa 123', telefono: '658982891', documento: '63473273N', haTenidoMascotas: true},
    {name: 'user2', email: 'user2@example.com', password: await Usuario.hashPassword('1234'), direccion: 'Privet Drive 4', telefono: '664538132', documento: '80704650L', haTenidoMascotas: false},
    {name: 'user3', email: 'user3@example.com', password: await Usuario.hashPassword('1234'), direccion: 'Doe Done 5', telefono: '668899887', documento: '55774856F', haTenidoMascotas: true}
  ])
  return { deletedCount, loadedCount }
}
