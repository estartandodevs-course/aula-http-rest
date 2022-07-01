const http = require("http");

const PORT = 80;

const json = {
  id: 12345,
  name: "João das Couves",
  email: "joao@gmail.com",
  active: true,
};

const server = http.createServer((req, res) => {
  const statusCode = 200;
  const headers = {
    "Content-Type": "application/json",
  };

  res.writeHead(statusCode, headers);
  res.end(JSON.stringify(json));
});

server.listen(PORT, () => console.log("Server running on port 80"));
