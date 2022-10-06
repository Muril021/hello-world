"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = 3000;
app.get('/', function (request, response) {
    response.send('Hello World!');
});
app.get('/bsm', function (request, response) {
    response.send('Mentalidades:<br>Persistência<br>Responsabilidade Pessoal<br>Orientação ao Futuro<br>Mentalidade de Crescimento<br><br>Habilidades:<br>Trabalho em Equipe<br>Atenção aos Detalhes<br>Proatividade<br>Comunicação');
});
app.get('/learning', function (request, response) {
    response.send('Objetivos de aprendizagem:<br>Aprimorar minhas hard skills e soft skills.');
});
app.listen(port, function () {
    console.log("Server is running at port ".concat(port, "!"));
});
