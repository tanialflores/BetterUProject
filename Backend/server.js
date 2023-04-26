const express = require('express')
const app = express()
const cors = require('cors');
const { sequelize } = require('./database')
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:8002', // Reemplaza con la URL de tu aplicación de React
    methods: ['GET', 'POST'],
    allowedHeaders: ['my-custom-header'],
    credentials: true
  }
});
const test = require('./test.json')

app.options('*', cors());
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


io.on('connection', (socket) => {
 
  io.emit('message', test[0])

  socket.on('message', (msg) => {
    io.emit('message', msg)
    if(msg.id === 1) io.emit('message', test[1])
    if(msg.id === 2) io.emit('message', test[2])
  })

});

// Escuchador de backend
server.listen(process.env.PORT || 8000, () => {
    console.log('Servidor corriendo en el puerto 8000')
})