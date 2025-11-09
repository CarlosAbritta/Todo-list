# 📝 To-Do List Full-Stack (Node.js, Express & MongoDB)

Este é um projeto de aplicação web full-stack de uma Lista de Tarefas (To-Do List) construída do zero. O objetivo principal foi demonstrar o conhecimento em arquitetura back-end (MVC), manipulação de banco de dados NoSQL e criação de uma interface de usuário dinâmica com EJS.

O projeto implementa um CRUD (Create, Read, Update, Delete) completo, gerenciamento de estado com sessões e feedback profissional ao usuário através de middlewares e flash messages.

## 🚀 Link para o Projeto (Demo)

*Em breve :)*

## ✨ Funcionalidades Principais (Features)

* **CRUD Completo:**
    * **Create:** Adicionar novas tarefas.
    * **Read:** Visualizar todas as tarefas em tempo real.
    * **Update:** Editar o nome e a descrição de tarefas existentes.
    * **Delete:** Remover tarefas da lista.
* **Marcação de Tarefas:** Marque ou desmarque tarefas como "concluídas" com um clique (toggle).
* **Validação de Back-end:** Um middleware dedicado impede o envio de tarefas com nome vazio.
* **Feedback ao Usuário (UX):** Mensagens de erro (`connect-flash`) são exibidas de forma limpa no front-end, sem "quebrar" a página, graças ao `express-session`.
* **Layout Responsivo:** A interface (front-end) se adapta a diferentes tamanhos de tela (desktop e mobile) usando Flexbox.

## 🏛️ Arquitetura e Pilha de Tecnologias (Tech Stack)

Este projeto foi construído usando a arquitetura **MVC (Model-View-Controller)** para garantir a separação de responsabilidades e um código limpo.

### Back-end

* **Node.js:** Ambiente de execução JavaScript no servidor.
* **Express.js:** Framework principal para o servidor web, rotas e middlewares.
* **MongoDB:** Banco de dados NoSQL para armazenar as tarefas.
* **Mongoose:** ODM para modelar os dados e interagir com o MongoDB.
* **Middlewares:**
    * `express-session`: Gerenciamento de sessões de usuário.
    * `connect-flash`: Criação de mensagens de feedback "flash" (que só aparecem uma vez).
    * `express-urlencoded`: "Tradutor" (parser) para os dados vindos de formulários HTML.
    * **Middlewares Customizados:** Criação de um logger de requisições e um validador de formulário.
* **`dotenv`:** Gerenciamento de variáveis de ambiente (chaves de API e segredos).

### Front-end

* **EJS (Embedded JavaScript):** Template engine para renderizar dados do back-end dinamicamente no HTML.
* **CSS3:** Estilização moderna utilizando Flexbox para o layout.
* **HTML5:** Estruturação semântica da página.

## ⚙️ Como Rodar Localmente

Para clonar e rodar este projeto na sua máquina, siga os passos abaixo.

### Pré-requisitos

* [Node.js](https://nodejs.org/en/) (v18 ou superior)
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (ou uma instância local do MongoDB)

### Passos

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git
    cd NOME_DO_REPOSITORIO
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as Variáveis de Ambiente:**
    * Crie um arquivo `.env` na raiz do projeto.
    * Adicione as seguintes variáveis (substitua pelos seus valores):
    ```ini
    # String de conexão do MongoDB Atlas
    MONGO_URI=mongodb+srv://...

    # Chave secreta para o express-session
    SESSION_SECRET=seuSegredoAleatorioAqui

    # Porta (opcional, o padrão é 3000)
    PORT=3000
    ```

4.  **Inicie o servidor:**
    ```bash
    node src/app.js
    ```

5.  **Acesse no navegador:**
    * Abra [http://localhost:3000](http://localhost:3000)

## 🔮 Próximos Passos (V2)

* [ ] **Autenticação de Usuários:** Implementar um sistema de login e registro (com `bcrypt` para hash de senhas) para que cada usuário tenha sua própria lista de tarefas privada.
* [ ] **Testes:** Adicionar testes unitários e de integração.
