import express from 'express'
import {LoginController, registerController, testController} from '../controllers/authController.js'

//import { requireSingIn } from '../middlewares/authMiddleware.js'

//router object

const router = express.Router()

//routing

//Register--here we are using POST method
router.post('/register', registerController)

//Login -- 
router.post('/login', LoginController)

//test routes
//router.get('/test',requireSingIn, testController)

export default router