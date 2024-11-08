import { model, Schema } from "mongoose";



// Write Schema

  const schema =new Schema({ 
    title: String, 
    desc: String
})

//Create your model
 export const Movie = model("Movie" , schema)