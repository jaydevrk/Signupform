var db = require('../connection')

module.exports ={

   addDetails:(userDetails,callback)=>{

    db.get().collection('Signup').insertOne(userDetails).then((result)=>{
        callback(true)
    })

   }

}