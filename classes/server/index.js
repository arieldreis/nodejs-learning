import http from 'http';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = http.createServer((req, res) => {
    const pathName = req.url;
    if( pathName === "/" || pathName === '/overview'){
        res.end("<h1 style='font-family:Arial'>Overview Page</h1>");
    }else if (pathName === '/product'){
        res.end("<h1 style='font-family:Arial'>Product Page</h1>");
    }else if( pathName === '/api'){
        fs.readFile(`${__dirname}/data.json`, 'utf-8', (err, data) => { 
            const file = JSON.parse(data); 
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(data);
        });
    } else {
        res.writeHead(404, {
            'content-type': 'text/html',
            'my-own-header': 'hello-world'
        });
        res.end("<h1 style='font-family:Arial'>Page Not Found</h1>");
    }
});

server.listen(3000, () => {
    console.log("Server is listening on port 3000");
});