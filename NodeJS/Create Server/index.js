const http = require("node:http");
const PORT = 8010;

const handleServer = (request, response) => {
	//console.log("Request : ", request);

	const { url } = request;

	if (url === "/") {
		// Root URL requested
		response.end("Welcome to Card book");
	} else if (url === "/greetings") {
		response.end("Hello there");
	} else {
		response.end("Unknown request");
	}
};

const server = http.createServer(handleServer);

server.listen(PORT, () => {
	//console.log("The app is running on localhost:" + PORT);
	console.log(`The app is running on localhost:${PORT}`);
});
