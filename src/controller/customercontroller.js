const {handleuploadsingleAPI}=require('../services/fileservice')
const{createcustomer,createcustomermany}=require('../services/customerservice')
const Customers = require('../model/Customer')
const aqp=require('api-query-params')
module.exports={
  handleCreateCustomerAPI:async(req,res)=>{
    let {name,phone,email,address,city,image,description}=req.body

    console.log(name,phone,email,address,city,image,description)
      let imgURL=''
    if (!req.files || Object.keys(req.files).length === 0) {
      res.status(400).send('No files were uploaded.');}
      else{
      console.log(req.files.image)
        let resule= await handleuploadsingleAPI(req.files.image)
        imgURL=resule.path         /////////?????
      }
      let customerdata={
        name,phone,email,address,city,image:imgURL,description
      }
    let resutle=  await createcustomer(customerdata)
      return res.status(200).json({
        EROR:0,
        data:resutle,
      })
},CreateManyCustomerAPI:async(req,res)=>{
  let customerdatamany=req.body.customer
  let resutle=  await createcustomermany(customerdatamany)
  if(customerdatamany){
  return res.status(200).json({
    EROR:0,
    data:resutle,

  })}
  else{
    return res.status(200).json({
      EROR:-1,
      data:resutle,
  
    })
  }
},getManyCustomerAPI:async(req,res)=>{
  const { filter,skip} = aqp(req.query);
  delete filter.page
  delete filter.limit
  let limit=req.query.limit
  let page=req.query.page
  let results=null;
  // console.log(filter)
  if(limit && page){
    let offset=(page-1)*limit
    let results = await Customers.find(filter).skip(offset).limit(limit)
    return res.status(200).json({
      Er:0,
      result:results
    })
  }
  else{
    results = await Customers.find({});
  }
  return res.status(200).json({
    ER:0,
    Data:results
  })
},putManyCustomerAPI:async(req,res)=>{
  let {id,name,email,phone,address,city}=req.body;
    let result=await Customers.updateOne(
      { _id: id },
      { email: email, name: name, phonge: phone, address: address, city: city }
    );
    return res.status(200).json({
      ER:0,
      Result:result
    })
},deleteManyCustomerAPI:async(req,res)=>{
  let idarray=req.body.customerID
  console.log([...idarray])
  let id=req.body.id
  console.log(id)
    if(Array.isArray(req.body.customerID)){
      let result= await Customers.delete({_id:{$in:idarray}})
      return res.status(200).json({
        message:'delete success',
        data:result
      })
    }else{
      let result= await Customers.deleteById(id);
        return res.status(200).json({
          message:'delete success',
          data:result
        })
    }
    
}
}