const express =require("express")
const app=express();
const port =6000;
require("./db/connection")
var cors = require('cors');
app.use(cors());
const router=require("./routes/router");

const swaggerUI = require('swagger-ui-express');
console.log("swaggerUI",swaggerUI)
const YAML = require('yamljs');
const swaggerJsDocs=YAML.load("./api.yaml")
app.use("/app-prefix/ocean-docs" ,swaggerUI.serve,swaggerUI.setup(swaggerJsDocs))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(router)
app.listen(`${port}` ,()=>{
    console.log("you are listening on ",port )
})