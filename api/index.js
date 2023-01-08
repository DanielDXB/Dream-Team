const express = require('express');

const app = express();

const port = 3000;

app.get("/", (req, res) => {
    res.send("Code Base!");
});

app.listen(port, () => {
    console.log("App server started on port: ", port);
});
