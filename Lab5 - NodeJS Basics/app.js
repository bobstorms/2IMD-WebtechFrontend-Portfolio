const express = require('express');
const app = express();
const port = 3000;
const routerMessages = require("./routers/messages");

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use("/api/messages", routerMessages);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});