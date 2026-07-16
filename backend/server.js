const exp=require('express');
const cors = require("cors");
require("dotenv").config();
const app=exp()

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
const mclient=require("mongodb").MongoClient
app.use(exp.json())

const Dburl=process.env.DB_URL;
mclient.connect(Dburl)
.then((client) => {
    let dbobj=client.db("Restraunt");
    let userscollection=dbobj.collection("User-details");
    app.set("userscollection",userscollection);
    console.log(app.get("userscollection"));
    console.log("data base connected successfully")
})
.catch(err => console.log("there is a error in db",err))

const users=require("./API/reservationapi");

app.use("/reservation-details-api",users);

app.use((req,res) => {
    console.log(req.url);
    res.send({message:"we got a invalid path"});
})

app.use((error,req,res,next) => {
    res.send({message:`the error is ${error.message}`})
    next();
})

const port=4000;

app.listen(port,() => {
    console.log(`server running on ${port}`)
})