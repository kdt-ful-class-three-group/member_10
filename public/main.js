function main(title, list) {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <title>${title}</title>
  </head>
  <body>
    <div>
    <h2>이름 목록</h2>
    <ul>
    ${list}
    </ul>
    </div>
  </body>
  </html>
  `

};

export { main };
