import React,{useState,useEffect} from 'react'
import axios from "axios"

const Images = () => {
    const [images, setimages] = useState([])


    const getimages =async()=>{
        const result =await axios.get("http://localhost:4000/images",{
            headers:{
                "Content-Type":"application/json"
            }
        })
console.log(result.data);
setimages(result.data)

    }

useEffect(() => {
 getimages()
}, [])



  return (
    <div>
        {images.map((val)=>(
            <img src={`http://localhost:4000/uploads/${val.img}`}/>
        ))}
    </div>
  )
}

export default Images