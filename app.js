const http = require('http');

const hostname = '0.0.0.0';
const port = 8080;

const server = http.createServer((req, res) => {
  if (req.url === '/redis-url') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    const redisUrl = process.env.REDIS_URL;
    res.end(`REDIS_URL: ${redisUrl}`);
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
 