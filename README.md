# dotenv-environmentvariables

### Aprendendo a usar variáveis de ambiente

### 1º passo

- instalar o dotenv com o comando: npm i dotenv ou yarn add dotenv

### 2º passo

- configurar o arquivo package.js

- Na seção de scripts adicione o dev e pro "dev": "SET NODE_ENV=development & nodemon index.js"

- e "prod": "SET NODE_ENV=production & node index.js"

### 3º passo

- No seu arquivo index.js adiciona na primeira linha o require('dotenv').config()

### 4º passo

- crie seu dotenv na raiz: .env e adicione suas variáveis

### Pronto

- agora é só usar process.env.NOME_VARIAVEL
