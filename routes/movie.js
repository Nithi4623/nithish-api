import express from 'express'
import { MovieCreate, MovieDelete, MovieGet, MovieGetbyid, MovieUpdate } from '../controllers/movie.controller.js'


const router = express.Router()
// CRUD API 


// Create 
router.post('/',MovieCreate)

// Read 
router.get('/', MovieGet)

//Get By id 
router.get('/:id', MovieGetbyid)
// Update
router.put('/:id', MovieUpdate)

// Delete
router.delete('/:id', MovieDelete)

export default router