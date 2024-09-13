let http = require("http");
let url=require("url")

let server = http.createServer((req, res) => {
    let parseUrl=url.parse(req.url,true)
    console.log(req)

    if (parseUrl.pathname="/" && req.method=="POST"){
        res.end("server working");
    }
    if(req.url=="/about-us"){
        res.end("About Us")
    }
    res.end("Welcome")
 
});

server.listen("8101")