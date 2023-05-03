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
    if(msg.id === 3) io.emit('message', test[3])
    if(msg.id === 4) io.emit('message', test[4])
    if(msg.id === 5) io.emit('message', test[5])
    if(msg.id === 6) io.emit('message', test[6])
    if(msg.id === 7) io.emit('message', test[7])
    if(msg.id === 8) io.emit('message', test[8])
    if(msg.id === 9) io.emit('message', test[9])
    if(msg.id === 10) io.emit('message', test[10])
    if(msg.id === 11) io.emit('message', test[11])
    if(msg.id === 12) io.emit('message', test[12])
    if(msg.id === 13) io.emit('message', test[13])
    if(msg.id === 14) io.emit('message', test[14])
    if(msg.id === 15) io.emit('message', test[15])
    if(msg.id === 16) io.emit('message', test[16])
    if(msg.id === 17) io.emit('message', test[17])
    if(msg.id === 18) io.emit('message', test[18])
    if(msg.id === 19) io.emit('message', test[19])
    if(msg.id === 20) io.emit('message', test[20])
    if(msg.id === 21) io.emit('message', test[21])
    if(msg.id === 22) io.emit('message', test[22])
    if(msg.id === 23) io.emit('message', test[23])
    if(msg.id === 24) io.emit('message', test[24])
    if(msg.id === 25) io.emit('message', test[25])
    if(msg.id === 26) io.emit('message', test[26])
    if(msg.id === 27) io.emit('message', test[27])
    if(msg.id === 28) io.emit('message', test[28])
    if(msg.id === 29) io.emit('message', test[29])
    if(msg.id === 30) io.emit('message', test[30])
    if(msg.id === 31) io.emit('message', test[31])
    if(msg.id === 32) io.emit('message', test[32])
    if(msg.id === 33) io.emit('message', test[33])
    if(msg.id === 34) io.emit('message', test[34])
    if(msg.id === 35) io.emit('message', test[35])
    if(msg.id === 36) io.emit('message', test[36])
    if(msg.id === 37) io.emit('message', test[37])
    if(msg.id === 38) io.emit('message', test[38])
    if(msg.id === 39) io.emit('message', test[39])
    if(msg.id === 40) io.emit('message', test[40])
    if(msg.id === 41) io.emit('message', test[41])
    if(msg.id === 42) io.emit('message', test[42])
    if(msg.id === 43) io.emit('message', test[43])
    if(msg.id === 44) io.emit('message', test[44])
    if(msg.id === 45) io.emit('message', test[45])
    if(msg.id === 46) io.emit('message', test[46])
    if(msg.id === 47) io.emit('message', test[47])
    if(msg.id === 48) io.emit('message', test[48])
    if(msg.id === 49) io.emit('message', test[49])
    if(msg.id === 50) io.emit('message', test[50])
    if(msg.id === 51) io.emit('message', test[51])
    if(msg.id === 52) io.emit('message', test[52])
    if(msg.id === 53) io.emit('message', test[53])
    if(msg.id === 54) io.emit('message', test[54])
    if(msg.id === 55) io.emit('message', test[55])
    if(msg.id === 56) io.emit('message', test[56])
    if(msg.id === 57) io.emit('message', test[57])
    if(msg.id === 58) io.emit('message', test[58])
    if(msg.id === 59) io.emit('message', test[59])
    if(msg.id === 60) io.emit('message', test[60])
    if(msg.id === 61) io.emit('message', test[61])
    if(msg.id === 62) io.emit('message', test[62])
    if(msg.id === 63) io.emit('message', test[63])
    if(msg.id === 64) io.emit('message', test[64])
  })

});

// Escuchador de backend
server.listen(process.env.PORT || 8000, () => {
    console.log('Servidor corriendo en el puerto 8000')
})