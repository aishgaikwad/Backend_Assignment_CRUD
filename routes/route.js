import express from 'express';
import signUpForm from '../controller/userAuthentication/signUp.controller.js';
import loginForm from '../controller/userAuthentication/login.controller.js'
import createMovies from '../controller/createMovie.controller.js';
import readMovies from '../controller/readMovies.controller.js';
import updateMovies from '../controller/updateMovies.controller.js';
import deleteMovies from '../controller/deleteMovies.controller.js';

const router = express.Router();

router.post('/signUp', signUpForm);
router.post('/login', loginForm);
router.post('/movie', createMovies);
router.get('/getMovies', readMovies);
router.put('/updateMovie/:id', updateMovies);
router.delete('/deleteMovie/:id', deleteMovies);

export default router;