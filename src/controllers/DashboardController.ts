import Time from "../models/Time";
import { Request, Response } from "express";



const Dashboard = class {

    // RETORNA TODOS OS PONTOS BATIDOS DE TODOS OS FUNCIONÁRIOS.

    static async DashboardAll(req : Request, res : Response){

        const AllDaysAndUsers = await Time.find().lean()

        
        res.status(201).json({
            date : AllDaysAndUsers
        })

    }

    // RETORNA TODOS OS PONTOS BATIDOS DE 1 FUNCIONÁRIO, PASSADO O NOME PELA URL. TAMBÉM PODE RETORNAR UM DIA ESPECÍFICO,
    // BASTA PASSAR A DATA COMO SEGUNDO ARGUMENTO NA URL.

    static async DashboardName(req : Request, res : Response){
        const name = req.params.name

        if(req.params.date && req.params.name){
            const NameAndDate = await Time.findOne({name : name, data : req.params.date}).lean()

            res.status(200).json({
                data : NameAndDate
            })

            return
        } else if(req.params.name){

            const AllByName = await Time.findOne({name : name}).lean()

            console.log('só nome')

            res.status(200).json({
                date : AllByName
            })

            return
        }

        res.status(400).json({
            
        })


    }

    static async DashboardDate(req : Request, res : Response){
        const date = req.params.date

        if(req.params.date){
            const AllByDate = await Time.findOne({data : date}).lean()

            res.status(200).json({
                date : AllByDate
            })  

            return
        }

        res.status(400).json({
            msg : "Você precisa adicionar uma data como parâmetro da URL."
        })
    }

}

export default Dashboard