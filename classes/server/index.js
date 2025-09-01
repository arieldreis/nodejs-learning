import http from 'http';
import url from 'url';

const server = http.createServer((req, res) => {
    const pathName = req.url;
    if( pathName === "/" || pathName === '/overview'){
        res.end("<h1 style='font-family:Arial'>Overview Page</h1>");
    }else if (pathName === '/product'){
        res.end("<h1 style='font-family:Arial'>Product Page</h1>");
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