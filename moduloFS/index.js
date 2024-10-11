// importar fs
//importar http

const fs = require("fs");
const http = require("http");

console.log(fs, http);
//importar arquivo json
const PORT = 3000;
const servidor = http.createServer(function(req, res){
  if(req.url === "/"){
    fs.readFile("./docs/index.html","utf-8", function(err, data){
    //nosso codigo
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(arquivo)
      res.end();
    });
  }
});
servidor.listen(PORT, function() {
  console.log("servidor rodando na porta: " + PORT);
});
