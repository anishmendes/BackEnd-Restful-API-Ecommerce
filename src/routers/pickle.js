const express = require("express");
const router = new express.Router();

const Product = require("../models/product")


// handling post req

router.post("/product", async (req, res) =>{
    try {
        const addingProducts = new Product(req.body) 
         
        console.log(req.body);
        const insertProducts = await addingProducts.save();
        res.status(201).send(insertProducts);
    } catch (e) {
        res.status(400).send(e)
    }
    })
    
    router.get("/product", async (req, res) =>{
        try {
         const getProduct = await Product.find({});
            res.send(getProduct);
        } catch (e) {
            res.status(400).send(e);
        }
        })
    
        // we will handle get req of single 
    
        router.get("/product/:id" , async (req, res) =>{
            try {
                const _id = req.params.id;
                const getProduct = await Product.findById({_id});
                res.send(getProduct);
            } catch (e) {
                res.send(400).send(e);
            }
        })
    
    
        // we will handle patch  req of single 
    
        router.patch("/product/:id" , async (req, res) =>{
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
    
        router.delete("/product/:id" , async (req, res) =>{
            try {
            
                const getProduct = await Product.findByIdAndDelete(req.params.id);
                res.send(getProduct);
            } catch (e) {
                res.send(500).send(e);
            }
        })

        module.exports = router;