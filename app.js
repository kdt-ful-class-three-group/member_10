//* 서버 생성
const http = require('http');
const fs = require('fs');
//* 쿼리스트링
// const qs = require('querystring');

//* GET,POST 만들어봄
//todo form태그 POST랑 연결시도

const server = http.createServer(function (request, response) {

  //*메소드와 url 변수처리 //
  const method = request.method;
  const url = request.url;


  
  if (method === 'GET') {
    if (url === "/") {
      const index = fs.readFileSync('index.html');
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(index);
    } else if (url === "/list.js") {
      fs.readFileSync('list.js');
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(listPage('list', 'dd'));
    } else if (url === "/add.js") {
      fs.readFileSync('add.js');
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(createHTML('add-page', createForm()));
    }
  };
  if (method === 'POST') {
    if (url === '/practice') {
      
    }
  }
});


server.listen(4000, function () {
  console.log("Loading... http://localhost:4000/"); 
});

function listPage(title, list) {
  
  return `
  <!DOCTYPE html>
  <head>
    <meta charset="UTF-8">
    <title>${title}</title>
  </head>
  <body>
    <div>
    <a href="/">홈</a>
    <a href="/list.js">목록</a>
    <a href="/">추가</a>
    <h2>User List</h2>
    ${list}
    </div>
  </body>
  </html>

  `
};

function createForm() {
  const form = `
  <form type="module" action="/practice" method="post"> 
      <input type="text" name="name" placeholder="Name">
      <button type="submit">추가</button>
  </form>
  `
  return form;
}

function createHTML(title, body) {
  return `
  <!DOCTYPE html>
  <head>
    <meta charset="UTF-8">
    <title>${title}</title>
  </head>
  <body>
    <div>
    <a href="/">홈</a>
    <a href="/list.js">목록</a>
    <a href="/add.js">추가</a>
    <h2>Add Name</h2>
    ${body}
    </div>
  </body>
  </html>
  `
};