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



  if (method === 'GET') {
    if (url === "/") {
      const index = fs.readFileSync('index.html');
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(index);
    }
  };
  const realData = [];
  if (method === 'POST') {
    if (url === "/practice") {
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
        const a = "안녕";
        const b = "list"
        //* JSON을 화면 출력하기 위한 작업들 // 
        response.end(createHTML(a, json, createList(realData)));
        
        // response.writeHead(200, { "Content-Type": "application/json" });
        // response.end(json);
        console.log("저장완료");
      })
    }
  }
});

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