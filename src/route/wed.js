/// xử lý rout

const express = require('express')
const {handlegetHome,handlegetUser,handleHome,handleCreateUser,handleFixuser,handlesucces,handleUpdateUser,handleDelete}=require('../controller/HomeControl')
const route =express.Router();
/// khai báo route
route.get('/home',handlegetHome)
route.get('/User',handlegetUser)
route.get('/User/:id',handleFixuser)

route.get('/',handleHome)
route.post('/create-user',handleCreateUser)
route.post('/udate-user',handleUpdateUser)
route.post('/delete/:id',handleDelete)
route.post('/detelesucces',handlesucces)


module.exports = route 