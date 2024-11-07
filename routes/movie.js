import express from 'express'
import { MovieDelete, Movieindex, MovieRead, MovieUpdate } from '../controllers/movie.controller.js'


const router = express.Router()
// CRUD API 


// Create 
router.post('/', Movieindex)

// Read 
router.get('/', MovieRead)


// Update
router.put('/:id', MovieUpdate)

// Delete
router.delete('/:id', MovieDelete)
export default router