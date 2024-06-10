const express = require("express");
const cors = require("cors");
require("../src/db/conn")
const Product = require("../src/models/product");
const router = require("../src/routers/pickle")




const app = express();
const port = process.env.PORT  || 3000;
    

const allowedOrigins = ['http://localhost:5173'];
    app.use(cors({
      origin: allowedOrigins
    }));
app.use(express.json());
app.use(router);







app.listen(port, () => {
    console.log(`connection is live at port no. ${port}`);
})  