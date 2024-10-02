require('dotenv').config()
const mongoose=require('mongoose')
const uri=process.env.Database_Url

const db=mongoose.connect(uri,{

})
.then(()=>{
    console.log("connected to DataBase")
})
.catch((err)=>{
    console.log("error to connect to database" , err)
})

module.exports=db;