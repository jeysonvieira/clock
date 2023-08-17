import express from 'express'
import cors from 'cors'
import UserRouter from './routers/UserRouter'
import TimeRouter from './routers/TimeRouter'
import DashboardRouter from './routers/DashboardRouter'



const app = express()


//Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({ credentials: true, origin: "http://localhost:3000" }))

//Routers
app.use('/users', UserRouter)
app.use('/time', TimeRouter)
app.use('/dashboard', DashboardRouter)

try {
    const port = 3333
    app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`)
    })
} catch (error) {
    console.log(error)
}

