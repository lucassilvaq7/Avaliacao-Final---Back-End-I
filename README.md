# ⭐ API Lista de Recados ⭐

Esta é uma API Lista de Recados que permite o registro de usuários, login e a criação, leitura, atualização e exclusão de mensagens (CRUD). A API foi desenvolvida utilizando Node.js, Express e validações com middlewares.

## 📌Tecnologias Utilizadas
- **Node.js**
- **Express**
- **UUID** para geração de IDs
- **Bcrypt** para criptografar senhas
- **Postman** para documentação da API

## 📌Funcionalidades
- **Sign Up:** Criação de novos usuários
- **Login:** Acesso de usuários registrados
- **CRUD de mensagens:** Gerenciamento de mensagens dos usuários (Create, Read, Update e Delete)

## 📌Endpoints 
### Usuários:
- **POST** `/users/signup`: Registra um novo usuário
- **POST** `/users/login`: Realiza login de um usuário

### Mensagens:
- **POST** `/notes/message`: Cria uma nova mensagem.
- **GET** `/notes/message/:email`: Lista as mensagens de um usuário. (associadas a um email registrado)
- **PUT** `/notes/message/:id`: Atualiza uma mensagem. (com base no id da mensagem)
- **DELETE** `/notes/message/:id`: Exclui uma mensagem. (com base no id da mensagem)

## Documentação 📑
A documentação completa da API está disponível no Postman: [Documentação Postman](https://documenter.getpostman.com/view/38440790/2sAXxS8ByP)<br>
Esta documentação está interagindo com o projeto rodando na nuvem: [Deploy](https://avaliacao-final-back-end-i-m20u.onrender.com)

## Instalação 🖥💾
Clone o repositório:

```bash
git clone https://github.com/lucassilvaq7/Avaliacao-Final-Back-End-I.git
```

Instale as dependências:

```bash
npm install
```

Para executar localmente:

```bash
npm start
```

O servidor estará em http://localhost:3000.
