const jsonServer = require("json-server");
const { generateKtpData } = require("./user");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;
server.use(jsonServer.bodyParser);
server.use(middlewares);
server.listen(port, () => {
    console.log("JSON Server is running");
});

server.get("/users", (request, response) => {
    if (request.method === "GET") {
        const users = generateKtpData();
        response.status(200).jsonp(users);
    }
});
