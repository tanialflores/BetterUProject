const express = require('express')
const { sequelize } = require('./database')
const app = express()

// Http
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// routes
app.use(require('./routes/userRoutes'))


sequelize.sync({ force: false }).then(() => {
    console.log('Sequelize se sincronizó correctamente con la base de datos');
  }).catch((error) => {
    console.log('Hubo un error al sincronizar Sequelize con la base de datos:', error);
  });

app.listen(process.env.PORT || 8000, () => {
    console.log('Servidor corriendo en el puerto 8000')
})