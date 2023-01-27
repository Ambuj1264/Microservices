const AirMaster=require("../model/mySchema");

const airController={
get:async(req,res)=>{
    res.send("hello oceanfreight ambuj" )
},
getAir:async(req,res)=>{
    const airMaster=await AirMaster.find();
    res.json(airMaster);
},

addAir:async(req,res)=>{
    const airMaster=new AirMaster({
        consineeName:req.body.consineeName,
        shipperName:req.body.shipperName
    });
    airMaster.save()
    .then((data)=>{
        res.json(data)
    })
    .catch((err)=>{
        res.json(err)
    })
}
}
module.exports=airController;
