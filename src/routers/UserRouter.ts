import UserController from "../controllers/UserController";
import express from 'express'

const UserRouter = express.Router()


UserRouter.post('/signup', UserController.Signup)


export default UserRouter