const jwt = require('jsonwebtoken')

const Jsonwt = (id) => {
    return new Promise((res, rej) => {
        const payload = {id}
        jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: '2h'
        }, (err, token) => {
            if(err){
                rej('No se pudo generar el token')
            }else {
                res(token)
            }
        })
    })
}

module.exports = {
    Jsonwt
}