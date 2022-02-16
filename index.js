// Day 1 create server
const http = require('http');

const server = http.createServer( (req, res) => {
    const pathName = req.url;
if ( pathName == '/')
{
    res.end('Main Landing page '+ pathName);

}
if ( pathName == '/about') {
    res.end('About page ');

} else {
    res.writeHead( 404 , {
        'Content-type' :'text/html',
        'my-own-header' : 'Hello-world'
    });
    res.end('<h1> Page not found </h1> ');
}
})

server.listen(8000,'127.0.0.1', () => {
    console.log('server running');
})