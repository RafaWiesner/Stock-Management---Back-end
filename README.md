# Gerenciador de Estoque - Backend

Este é o repositório do backend do projeto **Gerenciador de Estoque**, desenvolvido com **Node.js** + **Express** e **PostgreSQL** + **Sequelize**. O backend é responsável pela API e pelas regras de negócio da aplicação, incluindo autenticação de usuários e gerenciamento de produtos.

---

# Aviso importante

> O backend está hospedado em um servidor **gratuito no Render**, onde fica **hibernando** após um período de inatividade.  
> Isso significa que a **primeira requisição pode demorar alguns segundos**, pois o servidor estará sendo reativado. 
> Então o login com cadastro e o carregamento de produtos pode demorar um pouco, por isso coloquei mensagem de carregamento para que o usuário saiba que precisa aguardar alguns segundos.

---

# Tecnologias Utilizadas

- Node.js
- Express
- PostgreSQL
- Sequelize
- Supabase (hospedagem do banco de dados)
- Render (hospedagem do servidor)

---

# Estrutura do Projeto

O projeto está organizado seguindo boas práticas de separação de responsabilidades:

src/
├── config/ # Configurações do Sequelize e banco de dados
├── controllers/ # Lógica de controle (intermediação entre rotas e serviços)
├── models/ # Definição das tabelas do banco (usuários e produtos)
├── routes/ # Definição das rotas da aplicação 
├── services/ # Regras de negócio e interação com o banco

---

# Funcionalidades

- Cadastro simples de usuários (nome, email e senha)
- Login de usuários
- Tabela pública para visitantes (sem login)
- Tabelas privadas para usuários logados (por ID)
- Adição, edição, exclusão e listagem de produtos

---



# Link para o Frontend

O frontend deste projeto está disponível em:  
👉 [https://github.com/RafaWiesner/Stock-Management---Front-end](https://github.com/RafaWiesner/Stock-Management---Front-end)



