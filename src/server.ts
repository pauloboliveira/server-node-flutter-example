const express = require('express');

const app = express();

const id = 1;
const nome = "Paulo";
const saldo = 200.00

app.use(express.json());

app.get('/conta', (req, res) => {
    res.json({
        "id":id,
        "nome":nome,
        "saldo": saldo
    });
});

app.listen(3333);