const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use((req, res, next) => {
 console.log('Request received');
 res.header('Access-Control-Allow-Orgin', '*');
 res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
 res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();


});

server.use(router);

server.listen(3001, () => {
 console.log('JSON Server is running');
});