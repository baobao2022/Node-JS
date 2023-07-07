const { model } = require('mongoose')
const Customers=require('../model/Customer')//model


const createcustomer=async (customerdata)=>{
  console.log('check đầu vào',customerdata)
    try {
      let result=await Customers.create({
          name:customerdata.name,
          phone:customerdata.phone,
          email:customerdata.email,
          address:customerdata.address,
          city:customerdata.city,
          image:customerdata.image,
          description:customerdata.description
        })
        console.log('check result>>>>>>>',result)
        return result;
    } catch (error) {
      console.log(error)
      return null
    }
}
const createcustomermany=async(customerdata)=>{
  console.log(customerdata)
  try { 
    let result=await Customers.insertMany(customerdata)
  console.log(result)
     
      return result;
  } catch (error) {
    console.log('eroor',error)
    return null
}}
module.exports={createcustomer,createcustomermany}