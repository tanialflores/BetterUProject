const express = require('express')
const { sequelize } = require('./database')
const app = express()

// Http
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

  next()
})

// routes
app.use(require('./routes/userRoutes'))

// Conectarse a la base de datos
sequelize.sync({ force: false }).then(() => {
  console.log('Sequelize se sincronizó correctamente con la base de datos');
}).catch((error) => {
  console.log('Hubo un error al sincronizar Sequelize con la base de datos:', error);
});

// Escuchador de backend
app.listen(process.env.PORT || 8000, () => {
    console.log('Servidor corriendo en el puerto 8000')
})