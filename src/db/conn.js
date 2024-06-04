const mongoose = require('mongooose');
require("../src/db/conn");

mongoose.connect("mongodb://localhost:27017/pickle" , {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("connection sucessful");
}).catch((e) => {
    console.log("Connection Failed")
})