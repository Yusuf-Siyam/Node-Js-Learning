const http = require("http");
const port=3000;
const hostname="127.0.0.1";


const myserver=http.createServer((req,res)=>{
    console.log(req.url);
    
    res.end("hello i am your first server");
});

myserver.listen(port,hostname,()=>{
    console.log(`server is running successfully http://${hostname}:${port}`);
    
});

//server create korar por terminal:--->
//1st---> [npm install nodemon]  (json file create hobe)
//2nd--->packet.json-->script-->,["start": "nodemon index.js"]
//3rd-->[npm install]


