import express from 'express';
// import bodyParser from 'body-parser';
const mongoClient=require('mongodb').MongoClient


const app = express();


const state={
    db:null
}
module.exports.connect=function(done){
    const url ='mongodb://localhost:27017'
    const dbname='shopping'


mongoClient.connect(url,(err,data)=>{
    state.db=data.db(dbname)
})

done()

}
module.exporrts.get=function(){
    return state.db
}


db.connect((err)=>{
    if(err) console.log("not connecte")
    else 
    console.log('connected to port 27017')
})