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
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const User_1 = __importDefault(require("../models/User"));
function FindPassword(password) {
    return __awaiter(this, void 0, void 0, function* () {
        const FindUser = yield User_1.default.findOne({ password: password }).lean();
        if (!FindUser) {
            return false;
        }
        const hash = FindUser.password.toString();
        const descrypt = bcryptjs_1.default.compare(password, hash);
        //if(descrypt){
        //    return ""
        //}
    });
}
// async function CheckByPassword(password : string){
//     const user = User.findOne({name : name}).lean("password")
//     if(!user){
//         return false
//     }
//     const decrypt = bcrypt.compare()
// }  
exports.default = FindPassword;
