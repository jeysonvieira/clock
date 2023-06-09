"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../db/connection"));
const mongoose_1 = require("mongoose");
const UserType = {
    name: {
        type: String,
        require: true
    },
    function: {
        type: String,
        require: true
    },
    password: {
        type: Number,
        required: true
    }
};
const User = connection_1.default.model('User', new mongoose_1.Schema(UserType, { timestamps: true }));
exports.default = User;
