import express from 'express'
import { MovieCreate, MovieDelete, MovieGet, MovieUpdate } from '../controllers/movie.controller.js'


const router = express.Router()
// CRUD API 


// Create 
router.post('/',MovieCreate)

// Read 
router.get('/', MovieGet)


// Update
router.put('/:id', MovieUpdate)

// Delete
router.delete('/:id', MovieDelete)

export default router