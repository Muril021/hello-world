import * as express from 'express';

const app = express();
const port = 3000;

app.get('/', (request, response) => {
    response.send('Hello World!');
});

app.get('/bsm', (request, response) => {
    response.send('Mentalidades:<br>Persistência<br>Responsabilidade Pessoal<br>Orientação ao Futuro<br>Mentalidade de Crescimento<br><br>Habilidades:<br>Trabalho em Equipe<br>Atenção aos Detalhes<br>Proatividade<br>Comunicação');
});

app.get('/learning', (request, response) => {
    response.send('Objetivos de aprendizagem:<br>Aprimorar minhas hard skills e soft skills.');
});

app.listen(port, () => {
    console.log(`Server is running at port ${port}!`);
});