import { Schema } from 'mongoose'
import mongoose from '../db/connection'


const TimeType = {
    name: {
        type: String,
        required: true
    },values : [
        ...[]
    ],
    data : {
        type : String,
        required : true
    }
}

const Time = mongoose.model('Time', new Schema(TimeType, { timestamps: true }))

export default Time