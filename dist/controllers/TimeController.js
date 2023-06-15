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
const Time_1 = __importDefault(require("../models/Time"));
const axios_1 = __importDefault(require("axios"));
const CheckAction_1 = require("../helpers/CheckAction");
const TimeController = class {
    static Enter(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const password = req.body.password;
            const CheckPassword = yield User_1.default.findOne({ password: password }).lean();
            if (!CheckPassword) {
                res.status(400).json({
                    msg: "Senha incorreta, Digite novamente!"
                });
                return;
            }
            const URL = "http://worldtimeapi.org/api/timezone/America/Fortaleza";
            const APITime = yield (0, axios_1.default)({
                method: "get",
                url: URL,
                responseType: "json"
            }).then(function (response) {
                return response;
            });
            var horario = APITime.data.datetime;
            var dia = APITime.data.day_of_week;
            const DiasDaSemana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
            const mes = horario.slice(0, 10); // DIA, MÊS E ANO
            horario = horario.slice(11, 19); // HORA DO DIA
            if (typeof (dia) == 'number') {
                dia = DiasDaSemana[dia]; // DIA DA SEMANA
            }
            const checkAction = yield Time_1.default.findOne({ name: CheckPassword.name, data: mes }).lean();
            const values = [{ input: horario, output: '' }];
            // CRIAÇÃO DA TABELA CASO SEJA O PRIMEIRO PONTO DO DIA.
            if (!checkAction) {
                yield new Time_1.default({ name: CheckPassword.name, values: values, data: mes }).save();
                res.status(201).json({
                    msg: `${CheckPassword.name} : ${horario}`,
                    action: "entrada"
                });
                return;
            }
            const length = checkAction.values.length - 1;
            const CheckOut = yield (0, CheckAction_1.CheckTable)(checkAction.name, mes, length); // CHECANDO SE O ULTIMO ARRAY TEM SAÍDA.
            const clone = yield (0, CheckAction_1.CloneTable)(checkAction.name, mes, length); // CLONANDO TODO O ARRAY DO DIA DO USER.
            if (CheckOut) {
                if (typeof (clone) != "undefined") {
                    clone[length]["output"] = horario;
                }
                yield Time_1.default.updateOne({ name: CheckPassword.name, data: mes }, { values: clone }); // UPANDO TODO O ARRAY COM O OUTPUT DO ULTIMO ATUALIZADO.
                res.status(200).json({
                    msg: `${CheckPassword.name} : ${horario}`,
                    action: "saída"
                });
                return;
            }
            // CASO JÁ TENHA BATIDO O PRIMEIRO PONTO DE ENTRADA E SAÍDA DO DIA.
            if (typeof (clone) != "undefined") {
                clone.push({ input: horario, output: "" });
            }
            yield Time_1.default.updateOne({ name: CheckPassword.name, data: mes }, { values: clone });
            res.status(200).json({
                msg: `${CheckPassword.name} : ${horario}`,
                action: `${checkAction.values.length + 1} entrada do dia.`
            });
        });
    }
};
exports.default = TimeController;
