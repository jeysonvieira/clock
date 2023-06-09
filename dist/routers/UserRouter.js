"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserController_1 = __importDefault(require("../controllers/UserController"));
const express_1 = __importDefault(require("express"));
const UserRouter = express_1.default.Router();
UserRouter.post('/signup', UserController_1.default.Signup);
exports.default = UserRouter;
