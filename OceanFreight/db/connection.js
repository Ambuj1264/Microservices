const mongoose = require("mongoose");
mongoose.set('strictQuery', true)
mongoose
  .connect("mongodb+srv://ambuj:4614@cluster0.j9fakum.mongodb.net/OceanFreight", {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("you are connected with the db with OceanFreight ");
  })
  .catch((e) => console.log(e.message));
