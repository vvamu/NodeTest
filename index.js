const express = require("express");
const path = require("path")
const {AuthRoutes} = require("./routers/authRouter");
const {connectMongo , getClient} = require("./helpers/helper")
const {MongoConnection} = require("./helpers/helper")



let app = express();


app.use(express.static(path.join(__dirname,"views")));
app.set('view engine','ejs');
app.set('vies',path.join(__dirname,"views"))


const db = [
    {name : "nadezhda1", age: 10},
    {name : "nadezhda2", age: 15},

]


app.use("/",(req,res,next)=>{
    if(req.path != "/") { next();}
    else {
        res.json(db)
    }
  }
)
app.use("/api/",AuthRoutes)



MongoConnection.connect();
let client = MongoConnection.getClient();
let collection = client.db("test").collection("inventory");
collection.find({}).toArray((error, documents) => {
    if (error) {
      console.error("Error retrieving documents:", error);
    } else {
      console.log("Retrieved documents:", documents);
    }
  });
console.log("data - " + collection);


app.listen(3000, () => console.log("Server running at port 3000"));





