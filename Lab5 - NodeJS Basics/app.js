const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const routerMessages = require("./routers/api/v1/messages");
const pug = require('pug');

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home',
        message: 'This MessagesAPI is very cool!'
    });
});

app.use("/api/v1/messages", routerMessages);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});