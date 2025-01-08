const mongoose = require("mongoose");


const connectDatabase =()=>{
    mongoose.connect(/*"mongo://localhost:27017/Ecommerce"*/process.env.DB_URI,{useNewUrlParser:true}).then((data)=>{
        console.log(`Mongodb connected with server : ${data.connection.host}`) ;
     //in promise we have reject and resolve and as handled the error we dont have any need of catch
     });
     // as we had handled error we dont need catch from server.js as we handled promise rejection
    //  .catch((err)=>{
    //      console.log(err)
    //  })
   
};

module.exports= connectDatabase