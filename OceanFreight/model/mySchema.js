const mongoose=require("mongoose");

const mySchema=new mongoose.Schema({
    consineeName:{
        type:String,
    
    },
    shipperName:{
        type:String,
    }

})

const AirMaster=mongoose.model("AirMaster",mySchema);
    module.exports=AirMaster;
    

