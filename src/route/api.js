/// xử lý rout

const express = require('express');
const { handlegetUserAPI } = require('../controller/ApiController');
const routeAPI =express.Router();
/// khai báo route
const {getUserAPI,potUserAPI,handleUpdateUserAPI,handleDeleteAPI,handleuploadfiles} =require('../controller/ApiController')
// CRUD USER
routeAPI.get('/User',getUserAPI)
routeAPI.post('/User',potUserAPI)
routeAPI.put('/User',handleUpdateUserAPI)
routeAPI.delete('/User',handleDeleteAPI)
//C FILE and FIlES
routeAPI.post('/files',handleuploadfiles)

const{handleCreateCustomerAPI,CreateManyCustomerAPI,getManyCustomerAPI,putManyCustomerAPI,deleteManyCustomerAPI}=require('../controller/customercontroller')
routeAPI.post('/customer',handleCreateCustomerAPI)
routeAPI.post('/many-customer',CreateManyCustomerAPI)
routeAPI.get('/many-customer',getManyCustomerAPI)
routeAPI.put('/many-customer',putManyCustomerAPI)
routeAPI.delete('/many-customer',deleteManyCustomerAPI)






// routeAPI.post('/files',handleuploadfiles)



module.exports = routeAPI 