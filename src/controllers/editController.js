const Tarefa = require('../models/tarefaModel')

exports.renderEditPage = async (req,res)=>{
    try{
    const tarefaId = req.params.id
    const usuarioLogadoId = req.session.userId
    const tarefaParaEditar = await Tarefa.findOne({_id:tarefaId,user:usuarioLogadoId})
    if (!tarefaParaEditar) {
        //usar flash message dps
        return res.redirect('/');
    }
    res.render('editTarefa', {tarefa:tarefaParaEditar})
    }catch(error){
        console.log(error)
    }
}

exports.updateTarefa = async (req,res)=>{
    try{
        const tarefaId = req.params.id
        const usuarioLogadoId = req.session.userId
        const { nome_tarefa_editada, descricao_tarefa_editada } = req.body
        const campos_para_atualizar = {}
        if(nome_tarefa_editada.trim() && nome_tarefa_editada!== ''){
            campos_para_atualizar.nome = nome_tarefa_editada
        }
        if(descricao_tarefa_editada && descricao_tarefa_editada.trim() !== ''){
            campos_para_atualizar.descricao = descricao_tarefa_editada 
        }

        if(Object.keys(campos_para_atualizar).length>0){
            await Tarefa.updateOne(
                {_id:tarefaId, user: usuarioLogadoId },{$set:campos_para_atualizar}
            )
        }
        res.redirect('/')
}catch(error){
        console.log(error)
        res.status(500).send('Erro no servidor')
    }
}