const Tarefa = require('../models/tarefaModel')

exports.homePage = async (req, res) => {
    try {
        const tarefas = await Tarefa.find();
        const errorMessage = req.flash('error');

        res.render('home', { tarefas: tarefas,
            errorMessage: errorMessage,
         });
    } catch (error) {
        console.error('Erro ao buscar tarefas:', error);
        res.status(500).send('Erro ao buscar tarefas');
    }
}


exports.addTarefa = async (req, res) => {
    try{
        const { tarefa, descricao} = req.body;
        const novaTarefa = new Tarefa({
            nome: tarefa,
            descricao: descricao
        });
        await novaTarefa.save();
        res.redirect('/');
    }catch (error) {
        console.error('Erro ao adicionar tarefa:', error)}}


exports.deleteTarefa = async (req, res)=>{
    try{
    const idDaTarefa = req.body.tarefa_id;
    const deletarTarefa = Tarefa.deleteOne({_id:idDaTarefa});
    await deletarTarefa;
    res.redirect('/');

    }
    catch(error){
        console.log(error)
    } 
}

exports.toggleTask = async(req,res)=>{
    try{
        const idDaTarefa = req.params.id
        const tarefa = await Tarefa.findById(idDaTarefa)
        tarefa.concluida = !tarefa.concluida
        await tarefa.save()
        res.redirect('/')
    }catch(error){
        console.log(error)
        res.status(500).send("Erro no servidor.")
    }
}

