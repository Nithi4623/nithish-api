import express from 'express'
import movieRouter from './routes/movie.js';
import { connectDB } from './lib/db.js';


 const app = express()

 app.get('/' , ( req , res)=>{
  
      res.json({ msg :"hello students"})
    console.log("");

 })
  
// Data UnderStanding Middleware Transfer


app.use(express.json())
app.use(express.urlencoded({extended : true}))


 // Connect Db 

 connectDB()

  // CRUD MIDDLEWARE 

  app.use('/movies' , movieRouter)




const port = 6969
 app.listen(port, ()=>{
    console.log(`The server is running at http://localhost :${port}`);
    
 })

 //
