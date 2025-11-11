const argon = require('argon2')
const User = require('../models/userModel')

exports.renderLogin = (req,res)=>{
    res.render('login')
}

exports.loginUser = async (req,res)=>{
    try{
        const {email,password} = req.body
        const user = await User.findOne({email:email})
        if(!user){
            return res.status(400).send("Email ou senha inválidos")
        }

        const isPasswordValid = await argon.verify(user.password,password)
        if (!isPasswordValid){
            return res.status(400).send("Email ou senha inválidos")
        }

        req.session.userId = user._id

        console.log(`Usuário logado: ${user.email}`)
        res.redirect('/')

    }catch(error){
        console.error("Erro no login",error)
        res.status(500).send('Erro ao tentar fazer login')
    }
}