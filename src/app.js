const express = require("express");

require("../src/db/conn")


const Product = require("../src/models/product");



const app = express();
app.use(express.json())
const port = process.env.PORT  || 3000;


// handling post req
app.post("/product", async (req, res) =>{
try {
    const addingProducts = new Product(req.body) 
     
    console.log(req.body);
    const insertProducts = await addingProducts.save();
    res.status(201).send(insertProducts);
} catch (e) {
    res.status(400).send(e)
}
})
app.get("/product", async (req, res) =>{
    try {
     const getProduct = await Product.find({});
        res.send(getProduct);
    } catch (e) {
        res.status(400).send(e);
    }
    })


app.get ("/", async (req, res)  => {
    res.send("Hello from Anish Dai");
})

app.listen(port, () => {
    console.log(`connection is live at port no. ${port}`);
})