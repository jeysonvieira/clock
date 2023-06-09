"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const connection_1 = __importDefault(require("../db/connection"));
const TimeType = {
    name: {
        type: String,
        required: true
    },
    input: {
        type: String,
        required: true
    },
    output: {
        type: String,
        required: false
    },
    data: {
        type: String,
        required: true
    }
};
const Time = connection_1.default.model('Time', new mongoose_1.Schema(TimeType, { timestamps: true }));
exports.default = Time;
