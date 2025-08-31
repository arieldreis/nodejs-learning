import express from 'express';
import times from './tabela.js';

const app = express();
const PORT = 3012;

app.get('/', (req, resp) => {
    resp.status(200).send(times);
});

app.get('/:sigla', (req, resp) => {
    const siglaInformada = req.params.sigla.toUpperCase();
    const time = times.find(infoTime => infoTime.sigla === siglaInformada);
    resp.status(200).send(time);
});

app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta ${PORT} digite o link no seu navegador http://localhost:3012`);
});

