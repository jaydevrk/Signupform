const express =require('express')
const router = express.Router()
const productHelper = require('../helpers/product-helpers')


router.post('/', (req,res)=>{
    
    
    productHelper.addDetails(req.body,(result)=>{
     
   
        
        
    })
    
})

router.get('/',(req,res)=>{
    
    res.json('port Running')
 
})
module.exports= router;