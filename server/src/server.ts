import express, { request } from 'express'

import { PrismaClient } from '@prisma/client'

const app = express()

const prisma = new PrismaClient({
    log:['query']
})

//localhost:3333/ads

// Utilizando os métodos HTTP da melhor forma possível.
// GET é utilizado quando há necessidade de trazer uma listagem do 
//banco de dados

// POST é utilizado quando há a necessidade criar uma entidade ou um recurso 
//novo no banco de dados

// PUT é utilizado quando há a necessidade de atualizar/editar um recurso com 
//várias informações ao mesmo tempo

// PATHC é utilizado quando há a necessidade de atualizar apenas informações 
//especificas, ou muito pequenas. Ex.: receber notificação S ou N.

// DELETE é utilizado quando há a necessidade de excluir uma informaçõe do 
//banco de dados

/*
Tipos de parametros de url
Query: exp.: localhost:3333/ads?page=2
São parametros que possibilitam a permanencia do estado da página.
Utilizados geralmente para filtros, ordenação, paginação...

Route: exp.: localhost:3333/ads/5
O número 5 representa um id
São parametros também de url mas não precisam ser nomeados, 
mas servem como identificadores e geralmente utilizados par identificação 
de um recurso.

Body: Não ficam visíveis na url e são utilizados para manipular informações sensiveis
Como formulários, nome, email...


*/

app.get('/games', async (request, response) => { 
    const games = await prisma.game.findMany()
    return response.json(games);    
});

app.post('/ads', (request, response) => { 
    return response.status(201).json([]);
  });

app.get('/games/:id/ads', (request, response) => {
    // const gameId= request.params.id;
    
    return response.json([])
})

app.put('/ads/:id/discord', (request, response) => {
    // const adId= request.params.id;
    return response.json([]);
 });


app.listen(3333)