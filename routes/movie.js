import express  from 'express'


 const router = express.Router()
// CRUD API 


// Create 
router.post('/', (req , res)=>{
    res.send("Get the movie")

})

// Read 
router.get('/', (req , res)=>{
    res.send("Read the movie")
    
})
// Update
router.put('/:id', (req , res)=>{
    res.send("Update the movie")

})
// Delete
router.delete('/:id', (req , res)=>{
    res.send("Delete the movie")

})
 export default router