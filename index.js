
const http = require('http');
let fs = require('fs');
const url = require('url')
http.createServer(function (req,res) {
    const q = url.parse(req.url,true);
    const filename = "." + q.pathname;
    fs.readFile(filename,function(err,data){
        if(err){
            res.writeHead(404,{'Content-Type':'text/html'});
            return res.end("404 not found")
        }
        res.writeHead(200,{'Content-Type': 'text/html'})
        res.write(data);
    return res.end()
    })

    
}).listen(8080)