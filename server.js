// const http = require("http");

// http.createServer((req,res) => {
//    res.writeHead(200, {"Content-Type" : "Text/html"});      //200 => Success
//    res.write("<h2> Hello world</h2>");
//    res.end();
// }).listen(8081, () => {
//    console.log("success");
// });


const http = require("http");

const port = 8081;
var array = ["hello" , "vel"];
http.createServer((req,res) => {
   const {method , url} =req;                  // method and url obtained from req
   // console.log(method,url);           
   if (url === "/array") {
      if (method === "GET") {                  // local browswer only supports GET method. so we use Thunder clientf
         res.writeHead(200);                  // 200=> success (or) OK
         res.write(array.toString());         // converting array to string.
      }
      else if(method === "POST"){
         let body ="";
         req.on('error', (err) => {
            console.log(err);
         })
         .on('data' ,(chunk) => {
            body += chunk;
         })
         .on('end' , () => {
            body = JSON.parse(body);
            array.push(body.item);
            
            // console.log("data: " ,body);
         })
      }
   }
   else{
      res.writeHead(404);
   }
   res.end();                                                      
}) .listen(port , () => {
   console.log("Succesfully running" );
});