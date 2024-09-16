let express = require('express');
let cors =require("cors")
let app = express();
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>
{res.send("Welcome")})

app.post('/post',(req,res)=>{
    console.log(req.body)
res.send("Post method API")
})

app.get('/get',(req,res)=>{
    res.send("Get method API")
})


app.listen(8101);
