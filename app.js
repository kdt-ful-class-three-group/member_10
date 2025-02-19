//* 서버 생성
const http = require('http');
const fs = require('fs');
//* 쿼리스트링
const qs = require('querystring');

//* GET,POST 만들어봄
//todo form태그 POST랑 연결시도

const server = http.createServer(function (request, response) {

//*메소드와 url 변수처리 //
  const method = request.method;
  const url = request.url;


  
  const readJSON = fs.readFileSync('data.JSON');
  if (method === 'GET') {
    if (url === "/") {
      // const index = fs.readFileSync('index.html');
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(createHTML('practice', createForm(), createList(readJSON)));
    }
  };
  if (method === 'POST') {
    if (url === '/practice') {
      
    }
  }

server.listen(4000, function () {
  console.log("Loading... http://localhost:4000/"); 
});

function createHTML(title, body, list) {
  return `
  <!DOCTYPE html>
  <head>
    <meta charset="UTF-8">
    <title>${title}</title>
  </head>
  <body>
    <div>
    <h2>이름 추가</h2>
    ${body}
    <h2>이름 목록</h2>
    ${list}
    </div>
  </body>
  </html>
  `
};

function createList(userList) {
  let list = "<ul>";
  for (var i = 0; i < userList.length; i++){
    list = list + `<li>${userList[i]}</li>`
    i = i + 1;

    return list;
  }
};

function createForm() {
  const form = `
  <form action="/practice" method="post"> 
      <input type="text" name="name" placeholder="Name">
      <button type="submit">추가</button>
  </form>
  `
  return form;
}