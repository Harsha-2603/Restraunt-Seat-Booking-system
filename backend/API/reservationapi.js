const exp=require("express")
const expressAsyncHandler=require("express-async-handler")

const reservationapi=exp.Router()

reservationapi.use(exp.json())


reservationapi.post("/post",expressAsyncHandler(async (req,res) =>{
    let userscollection = req.app.get("userscollection");
        console.log(req.body);   // Add this
    let user=req.body
    let result=await userscollection.insertOne(user)
        console.log(req.body);   // Add this
    if(result){
        res.status(201).json({
            message:"Reservation added successfully"
        });
    }
    else{
        res.status(500).json({
            message:"Error while inserting"
        });
    }
}))

reservationapi.get("/get",expressAsyncHandler(async (req,res) =>{
    let userscollection = req.app.get("userscollection");
    let found=await userscollection.find().toArray()
    res.status(200).json(found);
}))

module.exports=reservationapi