import mongoose from '../db/connection'
import { Schema } from 'mongoose'


const UserType = {
    name : {
        type : String,
        require : true
    },
    function : {
        type : String,
        require : true
    },
    password : {
        type : Number,
        required : true
    }
}


const User = mongoose.model('User', new Schema(UserType, {timestamps : true}))

export default User