import mongoose from 'mongoose';
const {Schema}=mongoose;

const TodoSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    todo:{
        type:String,
        required:true,
    }
});

export const TODO = mongoose.model("todo",TodoSchema);