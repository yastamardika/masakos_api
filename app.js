const express = require("express");
const mongoose = require("mongoose");
const app = express();
const body = require("body-parser");
const cors = require("cors");
require("dotenv/config");

//Middlewares => bisa buat auth
// app.use('/recipes',()=>{
//     console.log('middleware coba')
// });
app.use(cors());
app.use(body.urlencoded({ extended: true }));
app.use(express.json());

//import routes
const recipesRoute = require('./routes/recipes')

app.use('/recipes', recipesRoute)
 
//Routes
app.get('/', (req,res)=>{
    res.send('welcome');
});

//connect to db
mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("connected");
  }
);
//start listening server
app.listen(2000);
