const express = require('express')
const path = require("path")
const app = express()
const PORT = 4000


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, "public")))

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.get("/", (req, res)=>{
    pageTitle = "Home"
    res.render("index", {pageTitle})
})

app.listen(PORT, ()=>{
    console.log(`server started at port ${PORT}`);
})