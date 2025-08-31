import express from 'express';
import mysql from 'mysql2/promise'
const app = express();
const PORT = 3010;
app.use(express.json());
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "testedb"

});
app.get('/users', async(req, resp) => {
    try{
        const [rows] = await pool.query(
            'SELECT * FROM users'
        );
        resp.json(rows);
    }catch(error){
        response.status(500).json({
            error: "Database error"
        })
    }
});
app.listen(PORT, () => {
    console.log(`API RUNNNING ON PORT ${PORT}`);
})