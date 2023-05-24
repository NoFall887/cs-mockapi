const jsonServer = require("json-server");
const {
    generateKtpData,
    generateSiup,
    generateNpwp,
    generateSkdp,
    generateTdp,
} = require("./user");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;
server.use(jsonServer.bodyParser);
server.use(middlewares);
server.listen(port, () => {
    console.log("JSON Server is running");
});

server.post("/ktp", (request, response) => {
    if (request.method === "POST") {
        const users = generateKtpData();
        response.status(200).jsonp(users);
    }
});

server.post("/siup", (req, res) => {
    res.status(200).jsonp(generateSiup());
});

server.post("/npwp", (req, res) => {
    res.status(200).jsonp(generateNpwp());
});

server.post("/skdp", (req, res) => {
    res.status(200).jsonp(generateSkdp());
});

server.post("/tdp", (req, res) => {
    res.status(200).jsonp(generateTdp());
});
