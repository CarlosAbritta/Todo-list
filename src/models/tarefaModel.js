const mongoose = require('mongoose');
    const tarefaSchema = new mongoose.Schema({
        nome: {type: String, required: true},
        descricao: String,
        dataCriacao: {
            type: Date,
            default: Date.now
        },
        concluida: {
            type: Boolean,
            default: false
        }
    })

const Tarefa = mongoose.model('Tarefa', tarefaSchema);

module.exports = Tarefa;