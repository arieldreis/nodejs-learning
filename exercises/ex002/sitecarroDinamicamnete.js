const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const path = require('path');

const app = express();
const PORT = 3010;

const carros =[
    { id: 1, modelo: 'Civic', marca: 'Honda', preco: 'R$ 95.000', ano: 2020 },
    { id: 2, modelo: 'Argo', marca: 'Fiat', preco: 'R$ 75.000', ano: 2022},
    { id: 3, modelo: 'Onix', marca: 'Chevrolet', preco: 'R$ 69.000', ano: 2021}
];

//pasta de arquivos estáticos (css, imagens, etc.)
app.use(express.static(path.join(__dirname, 'public')));

//Rotas
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/sobre', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'sobre.html'));

});

app.get('/estoque', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'estoque.html'));

});

app.get('/contato', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contato.html'));

});

// Rota dinâmica DEVE vir antes do 404
app.get('/carro/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const carro = carros.find(c => c.id === id);

    if (carro) {
        res.send(`
            <html>
                <head>
                    <meta charsert="UTF-8">
                    <title>Detalhes do Carro</title>
                    <link rel="stylesheet" href="/style.css">
                </head>
                <body>
                    <h1>Detalhes do carros</h1>
                    <ul>
                        <li><strong>Modelo:</strong> ${carro.modelo}</li>
                        <li><strong>Marca:</strong> ${carro.marca}</li>
                        <li><strong>Ano:</strong> ${carro.ano}</li>
                        <li><strong>Preço:</strong> ${carro.preco}</li>
                    </ul>
                    <a href="/estoque"> Voltar para o Estoque</a>
                </body>
            </html>   
        `);
    } else {
        res.status(404).send(`
            <h1>Carro não encontrado</h1>
            <a href="/estoque"> Voltar</a>
        `);
    }
});

// Rota 404
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));

});

//inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});