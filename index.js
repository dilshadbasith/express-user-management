require("dotenv").config()
const express=require ('express')
const app = express()
const port =3001
const adminRoute=require("./routes/AdminRoutes")


app.use(express.json())
app.use("/",adminRoute)

app.listen(port,(err)=>{
    if(err){
        console.log(err)
    }
    console.log(`server is running on port ${port}`)
})