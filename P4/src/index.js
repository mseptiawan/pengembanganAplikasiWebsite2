const express = require("express");
const app = express();
const port = 3000;


const routes = require('../routes/index');
app.use(routes);



//ejs
app.set("view engine", "ejs");
app.set('views', './views');



// app.get('/',(req,res)=>{
//     res.send("halo septiawan");

// })

app.listen(port,()=>{
    console.log("septiawan running")
})