# API REST com Express.js, Sequelize e SQLite

Este é um exemplo simples de uma API RESTful que permite operações CRUD (Create, Read, Update, Delete) para a entidade "Usuário" utilizando Node.js, Express.js, Sequelize e SQLite.

## Configuração e Uso

1. **Instalação de Dependências**
   - Clone o repositório https://github.com/Joshua731/prova_web2_2023.git para sua máquina local.
   - Certifique-se de ter o Node.js e Git Bash instalado.
   - No Git Bash, percorra até a pasta do repositório.
   - Execute `npm install express sequelize sqlite3` para instalar as dependências do projeto.

2. **Configuração do Banco de Dados**
   - O arquivo do banco de dados SQLite (`database.sqlite`) será criado automaticamente quando o aplicativo for executado pela primeira vez.

3. **Execução do Servidor**
   - Execute `npm start` para iniciar o servidor Express.

4. **Endpoints e Exemplos de Requisições**

   - **Criar um novo usuário (POST `/usuarios`):**
     ```
     [POST] http://localhost:3000/usuarios
     Content-Type: application/json

     {
         "nome": "Joshua",
         "data_nascimento": "2003-03-17",
         "email": "joshua.cvzn@gmail.com"
     }
     ```

   - **Buscar todos os usuários (GET `/usuarios`):**
     ```
     [GET] http://localhost:3000/usuarios
     ```

   - **Buscar um usuário pelo ID (GET `/usuarios/:id`):**
     ```
     [GET] http://localhost:3000/usuarios/1
     ```

   - **Atualizar um usuário pelo ID (PATCH `/usuarios/:id`):**
     ```
     [PATCH] http://localhost:3000/usuarios/1
     Content-Type: application/json

     {
         "nome": "Sofia",
         "data_nascimento": "2010-10-12",
         "email": "sofia.lurdes@gmail.com"
     }
     ```

   - **Excluir um usuário pelo ID (DELETE `/usuarios/:id`):**
     ```
     [DELETE] http://localhost:3000/usuarios/1
     ```

5. **Testando as Requisições com Postman**
   - Copie os exemplos acima para o Postman e substitua os valores conforme necessário.
   - Execute as requisições no Postman para testar as operações CRUD.

