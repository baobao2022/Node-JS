const express = require('express')
const route =require('./route/wed')
const fileUpload = require('express-fileupload');
const Users=require('./model/Users')
const routeAPI =require('./route/api')
const { MongoClient } = require("mongodb");
// import 'dotenv/config'
const app = express()
const mongoose=require('mongoose')
const configviewengine=require('./config/viewengine')
const connection=require('./config/database')
const path=require('path')
require('dotenv').config()
const port = process.env.PORT || 8000
const hostname=process.env.HOSTNAME
// config file up load có thư viện ngày mới nhận data dạng file được
app.use(fileUpload());
//config form
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data
//config template engine
configviewengine(app)
/// khai báo route
app.use('/',route);
app.use('/v1/api',routeAPI);

(async()=>{
  try {
    //connect URL
    // const uri = process.env.DB_HOST_WITH_DRIVER
    // console.log(uri)
    await connection()
    // const client = new MongoClient(uri);
    // Use connect method to connect to the server
    // await client.connect();
    console.log('Connected successfully to server');
    // const dbName=process.env.DB_NAME
    // const db = client.db(dbName);
    // const collection = db.collection('customers');
    app.listen(port,hostname, () => {
    console.log(`we're listening on port ${port}`)})
  } catch (error) {
    console.log('error connect to server',error)
  } 
})()

 