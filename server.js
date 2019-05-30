var express = require('express');
var app = express();

app.use(express.static(__dirname + '/src'));

app.get('/',function(request, response){
  response.sendFile(__dirname + '/index.html');
});

app.listen(4200, function(){
  console.log('Server Express Ready!');
});
/*archivo para levantar servidor local - conecta con direccion de mi proyecto 
  puedo cambiar app.listen por 8080 o 80
  para correrlo en terminal: node sever.js*/