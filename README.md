# 🧑‍💻 User CRUD API – Node.js + PostgreSQL

Este projeto é uma API simples de cadastro de usuários, criada com **JavaScript (Node.js)**, **PostgreSQL** e estrutura em **camadas (controller, service, model)**.

---

## 📁 Estrutura do Projeto

src/
├── config/ # Configuração do banco de dados
├── controllers/ # Controladores das rotas (ex: userController.js)
├── services/ # Lógica de negócio (ex: userService.js)
├── models/ # Comunicação direta com o banco
├── routes/ # Definição das rotas
├── middlewares/ # Middlewares de autenticação, validação etc

yaml
Copiar
Editar

---

## 🚀 Como rodar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repo.git
Instale as dependências:

bash
Copiar
Editar
npm install
Configure o banco PostgreSQL (credenciais em src/config/db.js)

Inicie o servidor:

bash
Copiar
Editar
npm start
📦 Rotas da API de Usuários
Método	Rota	Descrição
POST	/users	Cria um novo usuário
GET	/users	Lista todos os usuários
DELETE	/users/:id	Deleta um usuário pelo ID

📥 Exemplo de JSON para criação de usuário
json
Copiar
Editar
{
  "name": "Eduardo Neri",
  "email": "eduardo@example.com",
  "password": "123456",
  "role": "admin"
}
🧠 Observações
A API não armazena senhas criptografadas (por enquanto).

A estrutura é baseada em boas práticas de separação de responsabilidades.

Está pronta para ser integrada com autenticação JWT ou validação de sessões.

👨‍🔧 Autor
Feito com 💻 por Eduardo Neri