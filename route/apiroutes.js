import express from 'express'
import moviesrouter from '../route/movie.js'

const router = express.Router();

router.use('/movies',moviesrouter);

export default router;