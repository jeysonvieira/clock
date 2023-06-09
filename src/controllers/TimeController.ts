import User from '../models/User'
import Time from '../models/Time'
import { Request, Response } from 'express'
import axios from 'axios'




const TimeController = class {

    static async Enter(req: Request, res: Response) {

        const password: number = req.body.password

        const CheckPassword = await User.findOne({ password: password }).lean()

        if (!CheckPassword) {
            res.status(400).json({
                msg: "Senha incorreta, Digite novamente!"
            })
            return
        }

        const URL = "http://worldtimeapi.org/api/timezone/America/Fortaleza"

        const APITime = await axios({
            method: "get",
            url: URL,
            responseType: "json"
        }).then(function (response) {

            return response
        })

        var horario: any = APITime.data.datetime
        var dia: number | string = APITime.data.day_of_week

        const DiasDaSemana: string[] = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado']

        const mes = horario.slice(0, 10) // DIA, MÊS E ANO
        horario = horario.slice(11, 19) // HORA DO DIA
        if (typeof (dia) == 'number') {
            dia = DiasDaSemana[dia] // DIA DA SEMANA
        }

        const checkAction = await Time.findOne({ name: CheckPassword.name, data: mes }).lean()

        // CRIAÇÃO DA TABELA CASO SEJA O PRIMEIRO PONTO DO DIA.
        if (!checkAction) {
            await new Time({ name: CheckPassword.name, input: horario, output: "", data: mes }).save()

            res.status(201).json({
                msg: `${CheckPassword.name} : ${horario}`,
                action: "entrada"
            })
            return

        }


        await Time.updateOne({ name: CheckPassword.name, data: mes }, { output: horario })

        res.status(200).json({
            msg: `${CheckPassword.name} : ${horario}`,
            action: "saída"
        })
    }






}


export default TimeController