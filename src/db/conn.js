const mongoose = require('mongoose');



const conn = async() => {
 
    try {
         
        await mongoose.connect("mongodb+srv://anishmainali31:18dec@cluster0.vtm5dho.mongodb.net/Aachar").then(
            () => {
            console.log("Succesfully Connected");
        },
        (error) => {
            console.log(error);
          }
        );


    } catch (error) {
        console.log(error);
    }



}


conn();