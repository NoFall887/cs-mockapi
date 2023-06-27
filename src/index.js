const jsonServer = require("json-server");
const {
    generateKtpData,
    generateSiup,
    generateNpwp,
    generateSkdp,
    generateTdp,
    generateCompleteDocument,
    imageUpload,
} = require("./user");
const { generateLocationAndMovement } = require("./location-and-movement");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;
server.use(jsonServer.bodyParser);
server.use(middlewares);
server.listen(port, () => {
    console.log("JSON Server is running");
});

/** @INPUTING_AUTOMATION */
server.post("/image/upload/", (request, response) => {
    response.status(200).json(imageUpload());
});

server.post("/ktpverification/", (request, response) => {
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

server.get("/all-document", (req, res) => {
    res.status(200).json(generateCompleteDocument());
});

/**@LOCATION_AND_MOVEMENT */
server.post("/location-and-movement", (req, res) => {
    res.status(200).json(generateLocationAndMovement());
});

/**@CAPACITY_AND_EARNING_POWER */
server.post("/capacity", (req, res) => {
    res.status(200).json();
});
