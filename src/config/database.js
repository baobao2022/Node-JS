
require('dotenv').config()// process.env
const mongoose =require('mongoose') // import moongse
var dbState = [{
  value: 0,
  label: "disconnected"
},
{
  value: 1,
  label: "connected"
},
{
  value: 2,
  label: "connecting"
},
{
  value: 3,
  label: "disconnecting"
}];
const connection=async()=>{
try{
  //user,password
  const option={
    user:process.env.DB_USER,
    pass:process.env.DB_PASSWORD,
    dbName:process.env.DB_NAME
  }
  await mongoose.connect(process.env.DB_HOST,option);
  const state = Number(mongoose.connection.readyState);
    console.log(dbState.find(f => f.value == state).label, "to db");
} catch (error) {
  console.log('Error connection DB',error)
}
}
module.exports=connection;