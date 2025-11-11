const Tarefa = require('../models/tarefaModel')

exports.homePage = async (req, res) => {
    try {
        const tarefas = await Tarefa.find({user:req.session.userId})
        const errorMessage = req.flash('error')

        res.render('home', { tarefas: tarefas,
            errorMessage: errorMessage,
         })
    } catch (error) {
        console.error('Erro ao buscar tarefas:', error)
        res.status(500).send('Erro ao buscar tarefas')
    }
}


exports.addTarefa = async (req, res) => {
    try{
        const { tarefa, descricao} = req.body
        const novaTarefa = new Tarefa({
            nome: tarefa,
            descricao: descricao,
            user: req.session.userId
        });
        await novaTarefa.save()
        res.redirect('/');
    }catch (error) {
        console.error('Erro ao adicionar tarefa:', error)}}


exports.deleteTarefa = async (req, res)=>{
    try{
    const idDaTarefa = req.body.tarefa_id;
    const usuarioLogadoId = req.session.userId
    await Tarefa.deleteOne({_id:idDaTarefa,
        user: usuarioLogadoId
    });
    res.redirect('/');

    }
    catch(error){
        console.log(error)
    } 
}

exports.toggleTask = async(req,res)=>{
    try{
        const idDaTarefa = req.params.id
        const usuarioLogadoId = req.session.userId
        const tarefa = await Tarefa.findOne({_id:idDaTarefa,user:usuarioLogadoId})
        if(!tarefa){
            return res.status(400).send("Você não está autorizado a fazer isso")
        }
        tarefa.concluida = !tarefa.concluida
        await tarefa.save()
        res.redirect('/')
    }catch(error){
        console.log(error)
        res.status(500).send("Erro no servidor.")
    }
}

