require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000; 
const path = require('path');
const routes = require('./routes/routes');
const mongoose = require('mongoose');
const connectionString = process.env.MONGO_URI;
const session = require('express-session');
const flash = require('connect-flash');
const logMiddleware = require('./middlewares/logMiddleware');


//view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(logMiddleware)
app.use(express.static(path.join(__dirname, '../' ,'public')))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:false
}))
app.use(flash())
app.use('/', routes)


mongoose.connect(connectionString).then(()=>{
    console.log('Conectado ao MongoDB com sucesso!')
    app.listen(port, ()=>{
    console.log(`Servidor rodando em http://localhost:${port}`)
})
}).catch((err)=>{
    console.log('Erro ao conectar ao MongoDB:', err)
})

