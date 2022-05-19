# Back - End

Desenvolve o backend da aplicação, armazenando a lista de tarefas no Banco de Dados e oferecendo as funcionalidades de CRUD nesses dados

## Tecnologias e Frameworks utilizados

- API: Express, Node, Typescript, Mongoose (ORM)
- Database: MongoDB
- Testes: Mocha, Chai, Sinon
- Documentação: Swagger
- Deploy: Heroku, Docker

## Check-list de Desenvolvimento

- [x]  Configurar o ambiente de Desenvolvimento em Node + Typescript
- [x]  Desenvolver a estrutura de Arquivos da Api
- [x]  Configurar conexão com o Mongoose
- [x]  Criar Banco de Dados No Atlas
- [x]  Desenvover Interfaces + Validações com Zod
- [x]  Desenvolver camada Model
- [x]  Desenvolver camada Service
- [x]  Desenvolver camada Controller
- [x]  Desenvolver Rotas
- [x]  Testes Unitários
- [x]  Docker
- [x]  Documentar em Swagger
- [x]  Deploy no Heroku

## Executando a aplicação

Clone o repositório:

```bash
git clone https://github.com/WalmirLucena/ebytr-task-list
```
Navegue até o diretório do projeto:

```bash
cd backend
```
Instalando as dependências:

```bash
npm install
```
Iniciando a aplicação:


```bash
npm start
```
## Testando a aplicação

Executando os testes:

```bash
npm run test
```
Mostrando a cobertura dos testes da aplicação:

```bash
npm run test:coverage
```

## Documentação da API

Foi utilizado o Swagger para a documentação, pode ser acessado na rota `https://ebytr-task.herokuapp.com/api/docs`
