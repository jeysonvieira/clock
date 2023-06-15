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
exports.CloneTable = exports.CheckTable = void 0;
const Time_1 = __importDefault(require("../models/Time"));
function CheckTable(name, data, index) {
    return __awaiter(this, void 0, void 0, function* () {
        const check = yield Time_1.default.findOne({ name: name, data: data }).lean();
        const output = check === null || check === void 0 ? void 0 : check.values[index]["output"];
        if (output == "") {
            return true;
        }
        else {
            return false;
        }
    });
}
exports.CheckTable = CheckTable;
function CloneTable(name, data, index) {
    return __awaiter(this, void 0, void 0, function* () {
        const check = yield Time_1.default.findOne({ name: name, data: data }).lean();
        const output = check === null || check === void 0 ? void 0 : check.values;
        return output;
    });
}
exports.CloneTable = CloneTable;
