const mongoose=require('mongoose')

const taskSchema=new mongoose.Schema({
    description:{
       type:String,
       trim:true,
       required:true
    },
    completed:
    {
        type:Boolean,
       //  optional:true,
        default:false
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    }
},{
    timestamps:true
})
const task=mongoose.model('Task',taskSchema)
module.exports=task