const mongoose=require('mongoose')

const Contactus=new mongoose.Schema({
    Firstname:{
        type:String,
        require:true
    },
    Lastname:{
        type:"String",
        require:true
        
    },
    phoneNumber:{
        type:String,
        require:true
    },
    Companyemail:{
        type:String
        
    },
    Company:{
        type:String
        
    }, 
    Message:{
        type:String
    }
})

const Lettalk = mongoose.model("Lettalk",Contactus);

module.exports=Lettalk;