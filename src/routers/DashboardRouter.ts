import express from 'express'
import Dashboard from '../controllers/DashboardController'

const DashboardRouter = express.Router()


DashboardRouter.get('/all', Dashboard.DashboardAll) // TODOS OS PONTOS DE TODOS FUNCIONÁRIOS.
DashboardRouter.get('/name/:name?/:date?', Dashboard.DashboardName) // TODOS OS PONTOS DE 1 UNÍCO FUNCIONÁRIO.
DashboardRouter.get('/date/:date', Dashboard.DashboardDate) // TODOS OS PONTOS DAQUELE DIA (DATA MODELO EUA, ANO > MÊS > DIA, EX: 2023-08-17)
export default DashboardRouter
