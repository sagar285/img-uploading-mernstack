const mongoose =require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/imguploadingtest").then(()=>{
    console.log("connection succesful");
})

const Schema =new mongoose.Schema({
    img:{
        type:String,
        required:true
    }
})


const Userimg =mongoose.model("Userimg",Schema);

module.exports =Userimg