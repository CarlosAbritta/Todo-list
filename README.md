# 📝 To-Do List Full-Stack (Aplicação web com Autenticação)

Esta é uma aplicação web full-stack de uma Lista de Tarefas (To-Do List) construída do zero. O projeto evoluiu de um simples CRUD para uma **aplicação multi-usuário completa**, onde cada usuário possui sua própria conta e lista de tarefas privada e segura.

O foco foi implementar uma arquitetura de back-end robusta (MVC), segurança de ponta (hashing com **Argon2**) padrão moderno e seguro e um fluxo de autenticação completo (registro, login, sessões e rotas protegidas).

## 🚀 Link para o Projeto (Demo)

(https://carlos-todo-list.onrender.com/)

## ✨ Funcionalidades Principais (Features)

### V2: Autenticação & Segurança
* **Registro de Usuário:** Novos usuários podem criar contas. As senhas são criptografadas (hashed) com **`argon2`**, o padrão-ouro de segurança.
* **Login de Usuário:** Verificação de credenciais usando `argon2.verify` e gerenciamento de estado com `express-session`.
* **Rotas Protegidas:** Um middleware `isAuth` customizado protege todas as rotas da aplicação, redirecionando usuários não autenticados para a página de login.
* **Privacidade de Dados (Multi-tenancy):** Este é o "coração" da V2. Um usuário **só pode** ver, editar, deletar ou marcar as tarefas que ele mesmo criou. A lógica do controller valida o "dono" da tarefa (`user: req.session.userId`) em *todas* as operações de banco de dados.

### V1: Funcionalidades do CRUD
* **CRUD Completo:** Create (Adicionar), Read (Visualizar), Update (Editar) e Delete (Remover) tarefas.
* **Marcação de Tarefas:** Marque ou desmarque tarefas como "concluídas" com um clique (toggle).
* **Validação de Back-end:** Um middleware `validateTask` impede o envio de tarefas com nome vazio.
* **Feedback ao Usuário (UX):** Mensagens de erro (`connect-flash`) são exibidas de forma limpa no front-end, sem "quebrar" a página.

---

## 🏛️ Arquitetura e Pilha de Tecnologias (Tech Stack)

Este projeto foi construído usando a arquitetura **MVC (Model-View-Controller)**.

### Back-end
* **Node.js / Express.js:** Servidor web, roteamento e middlewares.
* **MongoDB / Mongoose:** Banco de dados NoSQL e ODM para modelagem de dados (`UserModel` e `TarefaModel`).
* **Autenticação & Segurança:**
    * `argon2`: Hashing de senhas (padrão de segurança moderno).
    * `express-session`: Gerenciamento de sessões de usuário ("login").
    * `connect-flash`: Mensagens de erro "flash" (que só aparecem uma vez).
* **Middlewares Customizados:**
    * `isAuth`: Protege rotas e verifica se o usuário está logado.
    * `validateTask`: Valida os dados do formulário de tarefas.
    * `logMiddleware`: Logger de requisições.
* **`dotenv`:** Gerenciamento de variáveis de ambiente.

### Front-end
* **EJS (Embedded JavaScript):** Template engine para renderizar dados dinâmicos no HTML.
* **CSS3:** Estilização moderna utilizando **Flexbox** para o layout.
* **HTML5:** Estruturação semântica da página.

---

## ⚙️ Como Rodar Localmente

### Pré-requisitos
* [Node.js](https://nodejs.org/en/) (v18 ou superior)
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (Cluster gratuito)

### Passos

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/CarlosAbritta/Todo-list.git](https://github.com/CarlosAbritta/Todo-list.git)
    cd Todo-list
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as Variáveis de Ambiente:**
    * Crie um arquivo `.env` na raiz do projeto.
    * Adicione as seguintes variáveis:
    ```ini
    # String de conexão do MongoDB Atlas
    MONGO_URI=mongodb+srv://...

    # Chave secreta para o express-session
    SESSION_SECRET=seuSegredoAleatorioAqui

    # Porta (opcional)
    PORT=3000
    ```

4.  **Inicie o servidor:**
    ```bash
    node src/app.js
    ```

5.  **Acesse no navegador:**
    * Abra [http://localhost:3000](http://localhost:3000)

---

## 🔮 Próximos Passos (V3)

* **[ ] Implementar Tokens CSRF (`csurf`)** para proteger todos os formulários contra ataques Cross-Site Request Forgery.
* **[ ] Refatorar o Front-end (EJS Partials)** para modularizar componentes repetidos (como a `navbar` e o `header`).
* **[ ] Adicionar Rota de Logout** para destruir a sessão do usuário.
* **[ ] Implementar `connect-mongo`** para tornar as sessões persistentes no banco de dados, sobrevivendo a reinicializações do servidor.
* **[ ] Validação Avançada (`express-validator`)** para o formulário de registro (ex: checar se o email é válido, se a senha tem 8+ caracteres).