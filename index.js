const jsonServer = require('json-server');
const TMServer = jsonServer.create();
const middleWare = jsonServer.defaults();
const route = jsonServer.router('db.json');

const PORT = process.env.PORT || 3000;

TMServer.use(middleWare);
TMServer.use(route);

TMServer.listen(PORT, () => {
    console.log(`TMServer started running at port : ${PORT} and its waiting for client request`);
});
