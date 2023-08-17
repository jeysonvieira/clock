"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const DashboardController_1 = __importDefault(require("../controllers/DashboardController"));
const DashboardRouter = express_1.default.Router();
DashboardRouter.get('/all', DashboardController_1.default.DashboardAll); // TODOS OS PONTOS DE TODOS FUNCIONÁRIOS.
DashboardRouter.get('/name/:name?/:date?', DashboardController_1.default.DashboardName); // TODOS OS PONTOS DE 1 UNÍCO FUNCIONÁRIO.
DashboardRouter.get('/date/:date', DashboardController_1.default.DashboardDate);
exports.default = DashboardRouter;
