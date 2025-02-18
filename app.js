//* 서버 생성
const http = require('http');
const fs = require('fs');

//* GET,POST 만들어봄
//todo 메인페이지 인덱스랑 연결해보고 form도 연결해보자
const server = http.createServer(function (request, response) {
  if (request.method === 'GET') {
    if (request.url === "/") {
      const index = fs.readFileSync('index.html');
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(index);
    }
  };
  if (request.method === 'POST') {
    
  }
});

server.listen(4000, function () {
  console.log("Loading... http://localhost:4000/"); // ㅋㅋ 콘솔 주소 3000으로 찍었다. //
});