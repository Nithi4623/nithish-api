import { model, Schema } from "mongoose";



// Write Schema

  const schema =new Schema({ 
    title: {
         
        type: String,

        required: true,

        unique: true
    }, 
    desc:  {
        type: String,

       required: true,
   }, 
})

//Create your model
  const Movie = model("Movie" , schema)
 export default Movie