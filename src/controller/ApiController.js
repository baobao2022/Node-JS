const { model } = require("mongoose");
const User = require("../model/Users");

const {handleuploadfilesAPI,handleuploadsingleAPI}=require('../services/fileservice')
const getUserAPI = async (req, res) => {
  const results = await User.find({});// lấy data từ user
  console.log(results)
   return res.status(200).json({
    errorCode:0,
    data:results
  })
};
const potUserAPI=async(req,res)=>{
  
    let { email, lname, fname, adress, city,userID } = req.body;
   let user= await User.create({
      Email: email,
      LName: lname,
      FName: fname,
      Address: adress,
      City: city,
      _id:userID
    });
    return res.status(200).json({
      error:0,
      data:user
    })
  };
  const handleUpdateUserAPI = async (req, res) => {
    let { email, lname, fname, adress, city, UserId } = req.body;
    console.log(">>check===========", email, lname, fname, adress, city, UserId);
   let user= await User.updateOne(
      { _id: UserId },
      { Email: email, LName: lname, FName: fname, Address: adress, City: city }
    );
   return res.status(200).json({
    error:0,
    data:user
  })
  };
  const handleDeleteAPI=async(req,res)=>{
    let userID=req.body.userID
    let user = await User.deleteOne({ _id: userID });
    return res.status(200).json({
      error:0,
      data:user
    })
  }
  
  const handleuploadfiles=async(req,res)=>{
    if (!req.files || Object.keys(req.files).length === 0) {
      res.status(400).send('No files were uploaded.');}
      if(Array.isArray(req.files.image)){

        let resule= await handleuploadfilesAPI(req.files.image)
        console.log(resule)
        return res.status(200).json({
            ER:0,
            data:resule
        })
        
      }
      else {
       let result= await handleuploadsingleAPI(req.files.image)
       return res.status(200).json({
        ER:0,
        data:result
       })
    }
  
  } 
module.exports={getUserAPI,potUserAPI,handleUpdateUserAPI,handleDeleteAPI,handleuploadsingleAPI,handleuploadfiles}