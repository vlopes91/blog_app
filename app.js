const express = require('express');
const app = express();
app.get('/', function(req,res){
  res.send('Hi There');
});
const port = 3000;
app.listen(port, function () {
  console.log('Listening on port 3000!')
});