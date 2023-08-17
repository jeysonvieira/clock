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
const Time_1 = __importDefault(require("../models/Time"));
const Dashboard = class {
    // RETORNA TODOS OS PONTOS BATIDOS DE TODOS OS FUNCIONÁRIOS.
    static DashboardAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const AllDaysAndUsers = yield Time_1.default.find().lean();
            res.status(201).json({
                date: AllDaysAndUsers
            });
        });
    }
    // RETORNA TODOS OS PONTOS BATIDOS DE 1 FUNCIONÁRIO, PASSADO O NOME PELA URL. TAMBÉM PODE RETORNAR UM DIA ESPECÍFICO,
    // BASTA PASSAR A DATA COMO SEGUNDO ARGUMENTO NA URL.
    static DashboardName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const name = req.params.name;
            if (req.params.date && req.params.name) {
                const NameAndDate = yield Time_1.default.findOne({ name: name, data: req.params.date }).lean();
                res.status(200).json({
                    data: NameAndDate
                });
                return;
            }
            else if (req.params.name) {
                const AllByName = yield Time_1.default.findOne({ name: name }).lean();
                console.log('só nome');
                res.status(200).json({
                    date: AllByName
                });
                return;
            }
            res.status(400).json({});
        });
    }
    static DashboardDate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const date = req.params.date;
            if (req.params.date) {
                const AllByDate = yield Time_1.default.findOne({ data: date }).lean();
                res.status(200).json({
                    date: AllByDate
                });
                return;
            }
            res.status(400).json({
                msg: "Você precisa adicionar uma data como parâmetro da URL."
            });
        });
    }
};
exports.default = Dashboard;
