import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
    
  
  res.render("index.ejs", );
  
  });

  app.post("/", (req, res) => {
    
  
    res.render("index.ejs",{
      name : req.body.name,
      question : req.body.question
     } );
    
    });



  app.get("/crush", (req, res) => {
   
    res.render("crush.ejs", {})
  });

  
  app.get("/askted", (req,res)=>{
    res.render("askted.ejs")
  })

  app.post("/askted", (req, res) => {
   
    res.render("askted.ejs", {
      name : req.body.name,
      question : req.body.question
     })
  });



  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });