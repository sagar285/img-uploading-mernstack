const express =require("express")
const app =express()
const Userimg =require("./database")
const multer =require("multer")
const cors =require("cors")

app.use(express.json())
app.use(cors())
app.use("/uploads",express.static("./uploads"))


const config =multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"./uploads")
    },
    filename:(req,file,callback)=>{
        callback(null,`image-${Date.now()}.${file.originalname}`)
    }
})

const isimage =(req,file,callback)=>{
    if(file.mimetype.startsWith("image")){
        callback(null,true)
    }
    else{
        callback(new Error("only images allow"))
    }
}


const upload =multer({
    storage:config,
    fileFilter:isimage
})


// img upload 

app.post("/imgupload",upload.single("photo"),async(req,res)=>{
    const {filename} =req.file
    const userfile =new Userimg({img:filename})
    const saveimg = await userfile.save()
    res.send(saveimg)
})

//get images from database

app.get("/images",async(req,res)=>{
    const imgs =await Userimg.find({})
    res.send(imgs)
})





app.listen(4000,()=>{
    console.log("server listening on 4000");
})