const argon = require('argon2')
const User = require('../models/userModel')

exports.renderPage = (req,res)=>{
    res.render('register')
}

exports.registerUser = async (req,res)=>{
    try{
        const {password,email,confirm_password} = req.body
        if(password!== confirm_password){
            return res.status(400).send("As senhas não coincidem")
        }
        const userExist = await User.findOne({email:email})
        if(userExist){
            return res.status(400).send("Já existe um usuário com este email")
        }
        const hashedPassword = await argon.hash(password)

        const newUser = new User({
            email:email,
            password:hashedPassword
        })

        await newUser.save()
        res.redirect('/')

    }catch(error){console.log(error)}

}