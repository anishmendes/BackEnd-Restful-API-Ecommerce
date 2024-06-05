const mongoose = require('mongooose');
require("../src/db/conn");

mongoose.connect("mongodb://127.0.0.1:27017/pickle" , {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("connection sucessful");
}).catch((e) => {
    console.log("Trying to Connect but Failed")
})