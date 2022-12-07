const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/':  
      res.write(fs.readFileSync('./index.html', 'utf-8'));
      break;
    case '/favicon.ico':  
      res.writeHead(200, {'Content-Type': 'image/jpeg'})
      res.write(fs.readFileSync('./favicon.ico'))
      break;
    default:  
      res.write('404')
      break;
  }
  console.log(req.url)
  res.end()
})

server.listen(5000);
