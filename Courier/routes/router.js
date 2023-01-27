const express=require("express");

const router=express.Router();
const airController=require("../controller/myController");

router.get("/courier",airController.getAir)
router.get("/",airController.get);

router.post("/addcourier",airController.addAir);

module.exports=router;
