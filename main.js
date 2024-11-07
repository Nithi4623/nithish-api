import express from 'express'
import movieRouter from './routes/movie.js';


 const app = express()

 app.get('/' , ( req , res)=>{
  
      res.json({ msg :"hello students"})
    console.log("");

 })
  

  // CRUD MIDDLEWARE 

  app.use('/movies' , movieRouter)




const port = 6969
 app.listen(port, ()=>{
    console.log(`The server is running at http://localhost :${port}`);
    
 })

 //
