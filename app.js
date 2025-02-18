//* 서버 생성
const http = require('http');
const fs = require('fs');

//* GET,POST 만들어봄
//todo 메인페이지 인덱스랑 연결해보고 form도 연결해보자
const server = http.createServer(function (request, response) {
  if (request.method === 'GET') {
    
  };
  if (request.method === 'POST') {
    
  }
});

server.listen(4000, function () {
  console.log("Loading... http://localhost:3000/");
});