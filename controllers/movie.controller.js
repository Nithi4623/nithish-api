import { Movie } from "../models/movie.model.js";

export const MovieGet = (req, res) => {
    res.send("Get All Movies Lists")
}

export const MovieCreate = async(req, res) => {
    
    // Create Movie INfo
    console.log(req.body);
    // Validate  Your Code

   const newMovie = new Movie({
        title : req.body.title,
        desc :req.body.desc
    });
try{
 const movie =  await newMovie.save();
  return res.status(201).json(movie)
}
catch(error){
    return res.status(400).json({ messege : error.messege})

}   
}
export const MovieUpdate = (req, res) => {
    res.send("Update All Movies Lists")
}

export const MovieDelete = (req, res) => {
    res.send("Delete All Movies Lists")
}