const express = require("express");

const app = express();

app.use(express.static('public'));

var porta = 3000;

app.listen(porta,() => console.log(`Rodando na porta http://localhost:${porta}`))