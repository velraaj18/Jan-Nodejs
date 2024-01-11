const http = require("http");

http.createServer((req,res) => {
   res.writeHead(200, {"Content-Type" : "Text/html"});      //200 => Success
   res.write("<h2> Hello world</h2>");
   res.end();
}).listen(8081, () => {
   console.log("success");
});