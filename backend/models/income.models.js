import mongoose from "mongoose";

const incomeSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        default:0,
    },
    date:{
        type:Date,
        default:Date.now(),
    },
    category:{
        type:String,
        enum:["Salary","Wages","Freelance","Dividend","Interest","Rent-Income","Profit","Capital Gains","Bonus","Gifts","Others"],
        default:"Others"
    }
},{
    timestamps:true
})

const Income = mongoose.model("Income",incomeSchema);

export default Income