const mongoose =require('mongoose');
const contructor = new mongoose.Schema({//constructor
  Email:String,
  LName:String,
  FName:String,
  Address:String,
  City:String,
}) 
const Users = mongoose.model('User', contructor);//collection trong data

module.exports=Users