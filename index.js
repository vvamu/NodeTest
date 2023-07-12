const express = require("express");
const path = require("path")
const {authRoutes} = require("./routers/authRouter");
const {userRouter} = require("./routers/userRouter");

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
app.use("/api/",authRoutes)
app.use("/db/",userRouter)



MongoConnection.connect();
//let client = MongoConnection.getClient();
let collection = MongoConnection.getUserCollection();


  app.use("/db", (req, res, next) => {
    collection.find({}).toArray()
      .then((documents) => {
        res.json(documents);
      })
      .catch((error) => {
        console.error("Error retrieving documents:", error);
        res.status(500).json({ error: "Internal Server Error" });
      });
  });

app.listen(3000, () => console.log("Server running at port 3000"));





