import express, { request } from 'express'

const app = express()

//localhost:3333/ads

// Utilizando os metodos HTTP da melhor forma possível.
// GET é utilizado quando há necessidade de trazer uma listagem do 
//banco de dados

// POST é utilizado quando há a necessidade criar uma entidade ou um recurso 
//novo no banco de dados

// PUT é utilizado quando há a ncessar de atualizar/editar um recurso com 
//várias informações ao mesmo tempo

// PATHC é utilizado quando há a ncessar de atualizar apenas informações 
//especificas, ou muito pequenas. Ex.: receber notficação S ou N.

// DELETE é utilizado quando há a necessidade de excluir uma informaçõe do 
//banco de dados

app.get('/games', function(request, response){ 
    return response.json([]); 
});

app.post('/ads', (request, response) => { 
    return response.status(201).json([]);
  });

app.get('/games/:id/ads', (request, response) => {
    // const gameId= request.params.id;
    
    return response.json([
        { id: 1, name: 'Anuncio 1'},
        { id: 2, name: 'Anuncio 2'},
        { id: 3, name: 'Anuncio 3'},
        { id: 4, name: 'Anuncio 4'},
    ])
})

app.put('/ads/:id/discord', (request, response) => {
    // const adId= request.params.id;
    return response.json([]);
 });


app.listen(3333)