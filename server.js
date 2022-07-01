const http = require("http");

const PORT = 3000;

const server = http.createServer((request, response) => {
  const headers = {
    "Content-Type": "text/plain",
    Age: "10",
  };
  const statusCode = 200;

  response.writeHead(statusCode, headers);
  response.end("Estartando Devs");
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
