"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const UserRouter_1 = __importDefault(require("./routers/UserRouter"));
const TimeRouter_1 = __importDefault(require("./routers/TimeRouter"));
const DashboardRouter_1 = __importDefault(require("./routers/DashboardRouter"));
const app = (0, express_1.default)();
//Middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({ credentials: true, origin: "http://localhost:3000" }));
//Routers
app.use('/users', UserRouter_1.default);
app.use('/time', TimeRouter_1.default);
app.use('/dashboard', DashboardRouter_1.default);
try {
    const port = 3333;
    app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`);
    });
}
catch (error) {
    console.log(error);
}
