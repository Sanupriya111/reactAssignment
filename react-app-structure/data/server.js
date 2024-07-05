const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./db.json"); // Adjust the path if your db.json is in a different location
const middlewares = jsonServer.defaults();

// Enable CORS
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

server.use(middlewares);
server.use(router);
server.listen(3500, () => {
  console.log("JSON Server is running on port 3500");
});
