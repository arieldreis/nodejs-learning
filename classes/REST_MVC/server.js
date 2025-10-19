import http from 'http';

let PORT = 8180;
function handle_request(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("Hello, World! Prontos para o API REST\n");
    console.log(`requested ${req.method} ${req.url}`);
}
http.createServer(handle_request).listen(PORT, '127.0.0.1');
console.log(`Inicializando o servidor http em Node.js na porta ${PORT}`);