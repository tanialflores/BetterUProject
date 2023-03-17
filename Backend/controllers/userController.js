const User = require("../models/userModel");
const bcrypt = require('bcrypt');

const userStore = async(req, res) => {
    const { email, password } = req.body;

    try {
        if(!email || !password){
            return res.status(400).json({ msg: 'Faltan campos requerido' })
        }

        const searchEmail = await User.findOne({ where: { email } })
        if(searchEmail){
            return res.status(409).json({ msg: 'El correo ingresado ya existe' })
        }

        const hashedPassword = await bcrypt.hash(password, 10);
    
        const user = await User.create({ email, password: hashedPassword })
        if(!user){
            return res.status(500).json({ msg: 'Hubo un problema, intente nuevamente' })
        }

        return res.status(200).json({ msg: 'Se registro de manera éxitosa', token: '' })
    } catch(err) {
        return res.status(500).json({ msg: 'Hubo un problema, intente mas tarde' })
    }


};

module.exports = { userStore }