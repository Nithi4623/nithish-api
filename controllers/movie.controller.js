import Movie from "../models/movie.model.js";

export const MovieGet = async (req, res) => {
    
    try {
      const movies=  await Movie.find()
      res.json(movies)
        
    } catch (error) {
        res.status(500).json({message : error.message})
    }



}

export const MovieCreate = async(req, res) => {
    
    // Create Movie INfo
    console.log(req.body);
    // Validate  Your Code

   const newMovie = new Movie({
        title: req.body.title,
        desc: req.body.desc
    });
try{
 const movie =  await newMovie.save();
  return res.status(201).json(movie)
}
catch(error){
    return res.status(400).json({ messege : error.message})
}   
}

export const MovieGetbyid = async (req, res)=>{
    try {
        const movie= await Movie.findById(req.params.id)
 
        if(movie == null){
         return res.status(404).json({ message : "cannot Find Movie"})
        }
        else{
         res.json(movie)
        }
         
     } catch (error) {
         return res.status(500).json({ messege : error.message})
 
     }

}


export const MovieUpdate = async (req, res) => {
    // res.send("Update All Movies Lists")

    // 
    try {
        const Movieupdate = await Movie.findOneAndUpdate({ _id : req.params.id}, {
            title : req.body.title,
            desc : req.body.desc
    
        })
             res.status(200).json(Movieupdate)

    } catch (error) {
            res.status(400).json({message : error.message})

    }
   
//    if(req.body.title !=null){
//     res.movie.title = req.body.title;
//    }
//    if(req.body.desc !=null){
//     res.movie.desc = req.body.desc;
//    }
//    try {
//     const UpdateMovie = await res.movie.save()
//     res.json(UpdateMovie)
//    } catch (error) {

//     res.status(400).json({message : error.message})
    
//    }

}

export const MovieDelete =  async (req, res) => {
    // res.send("Delete All Movies Lists")


    const movieId = req.params.id;

    // const foundMovie = Movie.findOne({ _id : movieId})

try {
    await Movie.deleteOne({ _id : movieId})
    res.json({messege :"Movie Deleted"})
} catch (error) {
    res.status(500).json({ message : error.message})
}



}