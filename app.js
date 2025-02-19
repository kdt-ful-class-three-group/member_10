//* 서버 생성
import http from 'http';
import fs from 'fs';
//* 쿼리스트링
// import querystring from 'querystring'
import {main} from './public/main'
// import { createHTML, createForm } from './create';


//* GET,POST 만들어봄
const server = http.createServer(function (request, response) {
  //*메소드와 url 변수처리 //
  const method = request.method;
  const url = request.url;


  if (method === "GET") {
    if (url === '/') {
      fs.readFileSync('main.js')
      response.writeHead(200, { "Content-Type": "text/html" })
      response.end(main());
    }



  } else if (method === "POST") {
    


  }
});

    server.listen(4000, function () {
      console.log("Loading... http://localhost:4000/");
    });


