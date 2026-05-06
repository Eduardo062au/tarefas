# tarefas

# Sistema de Gestão de Tarefas

## O que é?
Sistema que gerencia tarefas de projetos de uma equipe.

## Como executar
1. Instale as dependências:
   npm install

2. Execute o projeto:
   npm start

## O que o sistema faz
- Adiciona novas tarefas a um projeto
- Atualiza o status de uma tarefa
- Consulta todas as tarefas de um projeto específico

## Testes realizados
- Cadastro de 4 tarefas nos projetos "Site Escolar" e "RH Interno"
- Atualização do status da tarefa 1 de "Pendente" para "Em Andamento"
- Consulta de tarefas por projeto
- Tentativa de atualizar tarefa inexistente (ID 1000)

Resultado:

--- Tarefas do projeto "Site Escolar" ---
[ID: 1] Criar tela de login - Status: Em Andamento
[ID: 2] Desenvolver banco de dados - Status: Em Andamento
[ID: 4] Testar sistema de pagamento - Status: Pendente
--------------------------------------


--- Tarefas do projeto "RH Interno" ---
[ID: 3] Criar relatório mensal - Status: Pendente
--------------------------------------

Nenhuma tarefa encontrada para o projeto "Projeto Inexistente".
