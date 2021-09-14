const express =require('express')
var db = require('./connection')
const routeUrls= require('./routes/routes')
const cors= require('cors')
const router = express.Router()


const app =express();
const port = 4000;
db.connect((err)=>{
    if(err) console.log("not connected")
    else 
    console.log('connected to port ')
    
    
})




app.use(express.json())
app.use(cors())
app.use('/',routeUrls)


app.listen(port, ()=>console.log('listening to port'))