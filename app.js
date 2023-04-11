const express = require("express")
var hbs = require('hbs');
const app = express();
const port = process.env.PORT || 8000;
const path = require("path")

app.set('view engine', 'hbs');
const templates_path = path.join(__dirname,'views');
const partials_path = path.join(__dirname,'templates/partials');
//app.set('views',templates_path)
app.use(express.static(path.join(__dirname, "../public")))
hbs.registerPartials(partials_path)

app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/about",(req,res)=>{
    res.render("about.hbs")
})

app.get("/weather",(req,res)=>{
    res.render("weather.hbs")
})

app.get("*",(req,res)=>{
    res.render("404error.hbs")
})
app.listen(port,()=>{
    console.log(`listening at port  at ${port}`)
});