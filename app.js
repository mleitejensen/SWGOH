const express = require("express")
const app = express()
const router = require("./routes/router")
const port = 3000

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public/'));

app.listen(port, () => console.log("Server is running on port: " + port))

app.use(router)