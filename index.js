let http = require('http');
let url = require('url');
let StringDecoder = require('string_decoder').StringDecoder;

let server = http.createServer((req, res) => {
    let parseUrl = url.parse(req.url, true);
    let querryStringOject = parseUrl.query;
    res.end('Hello Node JS');
    console.log(querryStringOject);
})

server.listen(8080, () => {
    console.log('Running at localhost:8080');
})