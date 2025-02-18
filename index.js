const express = require('express');
const app= express();

const somado = require('./serviço')

app.get('/', (req, res) => {
    let numero_1 = req.query.numero_1;
    let numero_2 = req.query.numero_2;
    let operador = req.query.operador;
   

    let numero1 = Number(numero_1);
    let numero2 = Number(numero_2)

    
    let resultado = somado.soma(numero1, numero2, operador)

    res.json({resultado: resultado})
})


app.listen(3001, () => {
    let data = new Date();

    console.log("Servidor online na porta 8080 " + data)
})