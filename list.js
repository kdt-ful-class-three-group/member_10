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
    <h2>이름 목록</h2>
    ${list}
    </div>
  </body>
  </html>

  `
}