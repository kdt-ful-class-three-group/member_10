//* 서버 생성
const http = require('http');
const fs = require('fs');
//* 쿼리스트링
const qs = require('querystring');

//* GET,POST 만들어봄
//todo form태그 POST랑 연결시도
const server = http.createServer(function (request, response) {
  if (request.method === 'GET') {
    if (request.url === "/") {
      const index = fs.readFileSync('index.html');
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(index);
    }
  };
  const realData = [];
  if (request.method === 'POST') {
    if (request.url === "/practice") {
      request.on('data', function (data) {
        realData.push(data);
      });
      request.on('end', function () {
        //* toString으로 변환후 쿼리스트링 파스로 콘솔찍어봄. 콘솔은 다찍어봄. ㅋㅋ//
        console.log(realData);
        const toStringData = realData.toString();
        console.log(toStringData);
        const stringData = qs.parse(toStringData);
        console.log(stringData);
        
      })
    }
  }
});

server.listen(4000, function () {
  console.log("Loading... http://localhost:4000/"); 
});