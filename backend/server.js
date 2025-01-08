const app = require("./app");

const dotenv =require("dotenv");
const cloudinary=require("cloudinary");
const connectDatabase = require("./config/database");

//Handling Uncaught Exception
process.on("uncaughtException",(err)=>{
    console.log(`Error:${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
})




//config // we connected the dotenv so that this file can know that our port is 4000
dotenv.config({path:"backend/config/config.env"})
//connecting to database
connectDatabase()

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

//now create server //in config.env we willl make variable of port process.env here
const server=app.listen(process.env.PORT,()=>{

    console.log(`Server is working on http://localhost:${process.env.PORT}`)
});

//console.log(youtube); // youtube is not defined error will come and to this we tell uncaught error

//unhandled promise rejections error 
//-- when we forgot to add db in config file then it give us error that string is missing ----by this our server doesnt show anything so at the place of this we will try to show that server is crashed and it will be professional

process.on("unhandledRejection",err=>{
    console.log(`Error:${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);

    //now we will close our server , so we need to store 
    server.close(()=>{
        process.exit(1);
    });
});