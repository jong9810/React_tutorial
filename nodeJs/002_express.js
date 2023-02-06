const express = require('express');
const app = express();
const port = 3000;

// get 방식으로 기본 라우팅(/)일 때, 응답에 Hello World를 담아서 보내겠다는 뜻
// req : 요청정보가 담김, res : 응답정보가 담김
app.get('/', function (req, res) {
  res.send('Hello World');
});

// port에 대해서 듣는 중이라는 뜻(서버가 켜져있는 상태)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
