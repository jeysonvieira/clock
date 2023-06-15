import express from 'express'
import Dashboard from '../controllers/DashboardController'

const DashboardRouter = express.Router()


DashboardRouter.get('/all', Dashboard.DashboardAll) // TODOS OS PONTOS DE TODOS FUNCIONÁRIOS.
DashboardRouter.get('/name/:name?/:date?', Dashboard.DashboardName) // TODOS OS PONTOS DE 1 UNÍCO FUNCIONÁRIO.
DashboardRouter.get('/date/:date', Dashboard.DashboardDate)

export default DashboardRouter
