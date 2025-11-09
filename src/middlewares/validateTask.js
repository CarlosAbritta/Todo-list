const validateTask = (req,res,next)=>{
    const {tarefa} = req.body

    if(!tarefa || tarefa.trim()===''){
        req.flash('error', 'O nome da tarefa não pode estar vazio')
        return res.redirect('/')
    }
    next()
}

module.exports = validateTask