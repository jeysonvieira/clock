"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const TimeController_1 = __importDefault(require("../controllers/TimeController"));
const TimeRouter = express_1.default.Router();
TimeRouter.post('/enter', TimeController_1.default.Enter);
exports.default = TimeRouter;
