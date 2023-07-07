const mongoose =require('mongoose');
const mongoose_delete=require('mongoose-delete')

const Customer = new mongoose.Schema({//constructor
  name:{ type: String, min: 10, max: 100 },
  phone:{ type: String, min: 10, max: 12,required:true },
  email:{ type: String, min: 18, max: 65 },
  
  address:{ type: String, min: 18, max: 65 },
  city:String,
  image:String,
  decription:String
 
},
{ timestamps: true,
  //////////////////////static định nghĩa bên trong 1 shcema để có thể tái sử dụng 
  // statics:{
  // findByBao(name) {
  //   return this.find({ name: new RegExp(name, 'i') });
  // }}
},

)

Customer.plugin(mongoose_delete,{overrideMethods:'all'}) //thêm thư viện delete để không xóa vĩnh viễn true/false
//overrideMthors:all -> ghi đè lại tất cả các hàm như find, nếu không có sẽ find tất cả true false
const Customers = mongoose.model('Customer', Customer);//collection trong data

module.exports=Customers