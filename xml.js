const http = require("http");

const PORT = process.env.PORT || 80;

const xml = `<?xml version="1.0" encoding="UTF-8"?>
 <User>
    <id>12345</id>
    <name>João das Couves</name>
    <email>joao@gmail.com</email>
    <active>true</active>
 </User>
`;

const server = http.createServer((req, res) => {
  const statusCode = 200;
  const headers = {
    "Content-Type": "text/xml",
  };

  res.writeHead(statusCode, headers);
  res.end(xml);
});

server.listen(PORT, () => console.log("Server running on port 80"));
