"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../models/User"));
function CreatePassword() {
    const password = Math.floor(Math.random() * (9999 - 1111) + 1111);
    return password;
}
const UserController = class {
    static Signup(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, functionn } = req.body;
            if (!name) {
                res.status(400).json({
                    msg: "O Nome do funcionário é obrigatório!"
                });
                return;
            }
            if (!functionn) {
                res.status(400).json({
                    msg: "A Função do funcionário é obrigatório!"
                });
                return;
            }
            const checkUser = yield User_1.default.findOne({ name: name }).lean("name functionn");
            if (checkUser) {
                res.status(400).json({
                    msg: "O Funcionário já possui cadastro no sistema!",
                    nome: checkUser.name,
                    funcao: checkUser.function
                });
                return;
            }
            const password = CreatePassword();
            const CheckPassword = yield User_1.default.findOne({ password: password }).lean();
            if (CheckPassword) {
                res.status(500).json({
                    msg: "Houve um erro ao gerar sua senha, tente novamente!"
                });
                return;
            }
            yield new User_1.default({ name: name, function: functionn, password: password }).save();
            res.status(200).json({
                msg: `Usuário cadastrado com sucesso, sua senha é ${password}`
            });
        });
    }
};
exports.default = UserController;
