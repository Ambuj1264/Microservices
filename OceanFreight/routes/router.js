const express=require("express");

const router=express.Router();
const airController=require("../controller/myController");

router.get("/ocean",airController.getAir)
router.get("/",airController.get);

router.post("/addocean",airController.addAir);

module.exports=router;
