"use strict";
class Tarefa {
    constructor(id, descricao, status, projeto) {
        this.id = id;
        this.descricao = descricao;
        this.status = status;
        this.projeto = projeto;
    }
}
class GestorTarefas {
    constructor() {
        this.tarefas = [];
    }
    // Adiciona uma nova tarefa
    adicionarTarefa(tarefa) {
        this.tarefas.push(tarefa);
        console.log(`Tarefa "${tarefa.descricao}" adicionada ao projeto "${tarefa.projeto}".`);
    }
    buscarTarefa(id) {
        return this.tarefas.find(t => t.id === id);
    }
    atualizarStatus(id, status) {
        const tarefa = this.buscarTarefa(id);
        if (!tarefa) {
            console.log(`Erro: tarefa com ID ${id} não encontrada.`);
            return;
        }
        const statusAntigo = tarefa.status;
        tarefa.status = status;
        console.log(`Tarefa "${tarefa.descricao}" atualizada de "${statusAntigo}" para "${status}".`);
    }
    consultarTarefasPorProjeto(projeto) {
        const resultado = this.tarefas.filter(t => t.projeto === projeto);
        if (resultado.length === 0) {
            console.log(`Nenhuma tarefa encontrada para o projeto "${projeto}".`);
            return [];
        }
        console.log(`\n--- Tarefas do projeto "${projeto}" ---`);
        resultado.forEach(t => {
            console.log(`[ID: ${t.id}] ${t.descricao} - Status: ${t.status}`);
        });
        console.log(`--------------------------------------\n`);
        return resultado;
    }
}
const gestor = new GestorTarefas();
const tarefa1 = new Tarefa(1, "Criar tela de login", "Pendente", "Site Escolar");
const tarefa2 = new Tarefa(2, "Desenvolver banco de dados", "Em Andamento", "Site Escolar");
const tarefa3 = new Tarefa(3, "Criar relatório mensal", "Pendente", "RH Interno");
const tarefa4 = new Tarefa(4, "Testar sistema de pagamento", "Pendente", "Site Escolar");
gestor.adicionarTarefa(tarefa1);
gestor.adicionarTarefa(tarefa2);
gestor.adicionarTarefa(tarefa3);
gestor.adicionarTarefa(tarefa4);
gestor.atualizarStatus(1, "Em Andamento");
gestor.atualizarStatus(99, "Concluída");
gestor.consultarTarefasPorProjeto("Site Escolar");
gestor.consultarTarefasPorProjeto("RH Interno");
gestor.consultarTarefasPorProjeto("Projeto Inexistente");
