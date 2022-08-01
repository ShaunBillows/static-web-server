const express = require('express')
const app = express()

app.use("/static", express.static("public")); //Add the public folder to the web server, accessible through /static

app.listen(5001, () => {
    console.log("Listening on port 5001");
  });