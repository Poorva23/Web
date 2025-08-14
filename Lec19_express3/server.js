const express = require('express')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const app = express()
const port = 3000

app.post('/profile', upload.single('avatar'), function (req, res, next) {
    console.log(res.body);
    console.log(req.file)
return res.redirect("/home")
})
//OVERIDDING THE EXPRESSS


// app.response.sendStatus = function (statusCode, type, message) {
//   // code is intentionally kept simple for demonstration purpose
//   return this.contentType(type)
//     .status(statusCode)
//     .send(message)
// }

// app.get("/",(req,res)=>{
//   // res.sendStatus(200);
//   res.sendStatus(200, 'text/plain', '{"message":"FOUND found"}')

// })

// app.get("/error",(req,res)=>{
//   // res.sendStatus(400);
//   res.sendStatus(400, 'application/json', '{"error":" SOME EROR found"}')

// })

// app.get("/notfound",(req,res)=>{
//   // res.sendStatus(404);
//   res.sendStatus(404, 'application/json', '{"error":"resource not found"}')

// })
// app.get("/internal",(req,res)=>{
//   // res.sendStatus(500);
//   res.sendStatus(404, 'application/json', '{"error":"INTERNAL SERVER ERROR not found"}')

// })


/////// TEMPLATE ENGINE : HANDLEBARS
var hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

app.get("/home",(req,res)=>{
  res.render("home.hbs",{
    studentName: "Jitendra",
    studentClass: "G6"
  })
} )

app.get("/products",(req,res)=>{
  res.render("products.hbs",{
    products: ["WATCHES", "SHIRTS", "SHOES"]
  })
} )


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})