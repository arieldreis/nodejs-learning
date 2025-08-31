import express, { response } from 'express';
import mysql from 'mysql2/promise';
const app = express();
const PORT = 3011;
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('paginas'));
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "testedb"
});
app.post('/login', async(req, res) => {
    try{
        const nome = req.body.username00;
        const nascimento = req.body.nascimento00;
        const senha = req.body.password00;
        const [rows] = await pool.query(
            'insert into users(nome, nascimento, senha) values (?, ?, ?)',
            [nome, nascimento, senha] // ás arrays que iram preencher os dados no insert into
        );
        res.redirect("/sucesso.html");
    }catch(error){
        res.status(500).json({
            error: "Erro no banco de dados."
        });
    }
})
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});