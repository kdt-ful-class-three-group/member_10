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
        const toStringData = realData.toString();
        const stringData = qs.parse(toStringData);
        
        //* JSON에 데이터를 집어 넣기위한 작업. 
        const json = JSON.stringify(stringData, null, 2);
        console.log(json);
        fs.appendFileSync('data.JSON', json);

        //* JSON을 화면 출력하기 위한 작업들 // 
        response.writeHead(200, { "Content-Type": "application/json" });
        response.end(json);
      })
    }
  }
});

server.listen(4000, function () {
  console.log("Loading... http://localhost:4000/"); 
});