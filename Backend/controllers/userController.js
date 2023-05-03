const User = require("../models/userModel");
const bcrypt = require('bcrypt');
const { Jsonwt } = require("../helpers/jwt");

const userStore = async(req, res) => {
    const { email, password } = req.body;
    try {
        const searchEmail = await User.findOne({ where: { email } })

        if(searchEmail){
            return res.status(409).json({ msg: 'El correo ingresado ya existe' })
        }
        
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const user = await User.create({ email, password: hashedPassword })

        if(!user){
            return res.status(500).json({ msg: 'Hubo un problema, intente nuevamente' })
        }
        const token = await Jsonwt(user.id)

        return res.status(200).json({ msg: 'Se registro de manera éxitosa', token: token, status: 200 })
    } catch(err) {
        return res.status(500).json({ msg: 'Hubo un problema, intente mas tarde' })
    }


};

const userLogin = async(req, res) => {

    const { email, password } = req.body
    
    try {
        //Verificar si el email existe
        const user = await User.findOne({where: {email }})
        if(!user){
            return res.status(400).json({ msg: "El correo o contraseña son incorrectos" })
        }

        //Verificar la contraseña
        const validatePassword = bcrypt.compareSync(password, user.password)
        if(!validatePassword){
            return res.status(400).json({ msg: "El correo o contraseña son incorrectos" })
        }
        //Generar el JWT
        const token = await Jsonwt(user.id)
        res.json({ token, status: 200 })
    } catch(err){
        return res.status(500).json({ msg: "Algo salio mal" })
    }


}

module.exports = { userStore, userLogin }