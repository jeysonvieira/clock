import express from 'express'
import TimeController from '../controllers/TimeController'

const TimeRouter = express.Router()


TimeRouter.post('/enter', TimeController.Enter)




export default TimeRouter