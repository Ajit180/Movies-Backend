import express from 'express'
import { createmoviescontroller, deleteMovieController, getAllMoviesController, updateMovieController } from '../controller/moviescontroller.js';

const router = express.Router();



router.post('/create',createmoviescontroller);
router.get('/getall',getAllMoviesController);
router.put('/:id',updateMovieController);
router.delete('/:id',deleteMovieController);

export default router;