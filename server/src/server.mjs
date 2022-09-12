import express from 'express'

const app = express()

//localhost:3333/ads

app.get('/ads', ()=>{
    console.log('Acessou Ads!')
})

app.listen(3333)