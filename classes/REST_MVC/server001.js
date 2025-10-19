import app from './routes/app.js';
const PORT = normalizaPORT(process.env.PORT || '3000');
// process.env.PORT = é uma porta feita pelo próprio sistema.
function normalizaPORT(value){
    const port = parseInt(value, 10);
    if(isNaN(port)){
        return value;
    }
    if(port >= 0){
        return port;
    }
    return false;
}
app.listen(PORT, function(){
    console.log(`App rodando na porta ${PORT}`);
})