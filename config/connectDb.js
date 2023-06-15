const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://Sneha_Yadav:Sneha@cluster0.blgwfz4.mongodb.net/Expense_App")

.then(()=>{
  console.log("DB CONNECTED");
})

.catch((error)=>{
  console.log(error.message);
})