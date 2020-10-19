import express from 'express';

const app = express();

app.use(express.json());

 /**
  * Rota = conjunto
  * Recurso = usiário
  * 
  * Métodos HTTP = GET, POST, PUT, DELETE
  * 
  * GET = Buscar uma informação
  * POST = Criando uma informação
  * PUT = Editando uma informação
  * DELETE = Deletando uma informação
  * 
  * Parâmetros
  * Query Params: http://localhost:3333/users?search=jenifer
  * Route Params: http://localhost:3333/users/1 (Identificar um recurso)
  * Body: http://localhost:3333/users
  */

app.get('/users/:id', (request, response) => {
    console.log(request.query);
    console.log(request.params);
    console.log(request.body);

    return response.json({message: "Hello World"});
});

app.listen(3333); 
