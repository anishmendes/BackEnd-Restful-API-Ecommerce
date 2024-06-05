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

    // we will handle get req of single 

    app.get("/product/:id" , async (req, res) =>{
        try {
            const _id = req.params.id;
            const getProduct = await Product.findById({_id});
            res.send(getProduct);
        } catch (e) {
            res.send(400).send(e);
        }
    })


    // we will handle patch  req of single 

    app.patch("/product/:id" , async (req, res) =>{
        try {
            const _id = req.params.id;
            const getProduct = await Product.findByIdAndUpdate(_id, req.body, {
                new:true
            });
            res.send(getProduct);
        } catch (e) {
            res.send(500).send(e);
        }
    })
    // we will handle delete req of single 

    app.delete("/product/:id" , async (req, res) =>{
        try {
        
            const getProduct = await Product.findByIdAndDelete(req.params.id);
            res.send(getProduct);
        } catch (e) {
            res.send(500).send(e);
        }
    })


app.get ("/", async (req, res)  => {
    res.send("Hello from Anish Dai");
})

app.listen(port, () => {
    console.log(`connection is live at port no. ${port}`);
})