const mongoose=require('mongoose')
const QuestionSchema= mongoose.Schema({
    taskTitle:{type:String, required:"task must have title"},
    taskprogress:{type:Number,default:0},
    userid: { type: String, required: true }, // Change type to String
    username:{type:String,required:"task must have a username"},
    taskCategories:{type:String,required:"task must have a category"},  
    duedate:{type:Date,default:Date.now},
    taskstartedAt:{type:Date,default:Date.now},
    todos:{type:Array},
    done:{type:Array}

})
//export default mongoose.model("Question",QuestionSchema)
module.exports=mongoose.model("newtasks",QuestionSchema)


