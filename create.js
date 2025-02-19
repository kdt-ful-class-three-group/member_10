//todo 기본 태그 생성 

function createHTML(title, body, list) {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <title>${title}</title>
  </head>
  <body>
    <div>
    <h2>이름 추가</h2>
    ${body}
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

export { createHTML, createForm };