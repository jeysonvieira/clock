import User from '../models/User'
import bcrypt from 'bcryptjs'
import { Request, Response } from 'express'
//import FindPassword from '../helpers/password'

interface IUser {
    name: string,
    functionn: string,
}

function CreatePassword() : number{
    const password = Math.floor(Math.random() * (9999 - 1111) + 1111)
    return password
}


const UserController = class {

    static async Signup(req: Request, res: Response) {

        const { name, functionn }: IUser = req.body

        if (!name) {
            res.status(400).json({
                msg: "O Nome do funcionário é obrigatório!"
            })
            return
        }
        if (!functionn) {
            res.status(400).json({
                msg: "A Função do funcionário é obrigatório!"
            })
            return
        }

        const checkUser = await User.findOne({ name: name }).lean("name functionn")

        if (checkUser) {
            res.status(400).json({
                msg: "O Funcionário já possui cadastro no sistema!",
                nome: checkUser.name,
                funcao: checkUser.function
            })
            return
        }

        const password = CreatePassword()

        const CheckPassword = await User.findOne({password : password}).lean()

        if(CheckPassword){
            res.status(500).json({
                msg : "Houve um erro ao gerar sua senha, tente novamente!"
            })
            return
        }

        await new User({ name: name, function: functionn, password: password }).save()

        res.status(200).json({
            msg : `Usuário cadastrado com sucesso, sua senha é ${password}`
        })
    }







}

export default UserController