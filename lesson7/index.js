const http=require("http");
const fs=require("fs");
const { log } = require("console");

const port=process.env.port; //then root ekta [Procfile] file open korbo [web: node index.js] then .gitignore[node_modules]

// Corrected handleReadfile function
const handleReadfile = (filename, statusCode, req, res) => {
    fs.readFile(filename, "utf-8", (err, data) => { // <-- CHANGED HERE: Using the 'filename' parameter
        if (err) {
            // It's good practice to send a 500 error if the file read fails
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Internal Server Error");
            console.error(`Error reading file ${filename}:`, err); // Use console.error for errors
        } else {
            res.writeHead(statusCode, { "Content-Type": "text/html" }); // <-- Using 'statusCode' parameter
            res.write(data);
            res.end();
        }
    });
};
// const handleReadfile=(filename,statusCode,req,res)=>{
//      fs.readFile(filename,"utf-8",(err,data)=>{
//        if(err){
//         console.log(err);
//        }else{
//         res.writeHead(200\\\\\vul,{"Content-Type":"text/html"});
//         res.write(data);
//         res.end();
//        }

//     })
// }

const server=http.createServer((req,res)=>{
 if(req.url ==="/"){
   handleReadfile("index.html",200,req,res)
 }

 else if(req.url ==="/about"){
   handleReadfile("about.html",200,req,res)
 }
 else if(req.url ==="/contuct"){
   handleReadfile("contuct.html",200,req,res)
 }
 else{
    handleReadfile("404.html",200,req,res);
 }
});

server.listen(port, ()=>{
console.log('server is running');

})

//server create korar por terminal:--->
//1st---> [npm init -y]  (json file create hobe)
//2nd--->packet.json-->script-->,["start": "nodemon index.js"]
//3rd-->[npm install]