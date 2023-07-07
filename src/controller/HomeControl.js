const connection = require("../config/database");
// const { GetAllList } = require("../services/CRUDservice");
const User = require("../model/Users");
//xử lý
const handlegetHome = (req, res) => {
  return res.render("home.ejs");
};
const handlegetUser = async (req, res) => {
  let results = await User.find({});
  res.render("User.ejs", { listUsers: results }); //pass data from express to ejs
};

const handleHome = (req, res) => {
  res.render("home.ejs");
};

const handleCreateUser = async (req, res) => {
  let { email, lname, fname, adress, city } = req.body;
  await User.create({
    Email: email,
    LName: lname,
    FName: fname,
    Address: adress,
    City: city,

  });
  //   const [results,fields] = await connection.query( `INSERT INTO Users  (email,LastName,FirstName,Address,City)
  //    VALUES (?,?,?,?,?);`,[email,lname,fname,adress,city]);
  //   res.send("Create Success")
  res.send("success");
};
const handleFixuser = async (req, res) => {
  const UserId = req.params.id;
  let user = await User.findById(UserId);
  res.render("Edit.ejs", { EditUser: user });
};
const handleUpdateUser = async (req, res) => {
  let { email, lname, fname, adress, city, UserId } = req.body;
  console.log(">>check===========", email, lname, fname, adress, city, UserId);
  await User.updateOne(
    { _id: UserId },
    { Email: email, LName: lname, FName: fname, Address: adress, City: city }
  );
  res.redirect("/User");
};
const handleDelete = async (req, res) => {
  let UserId= req.params.id
  let user = await User.findById(UserId).exec();
  res.render("Delete.ejs", {UserEdit:user });
  
};
const handlesucces=async(req,res)=>{
  let userIdD=req.body.userID
  await User.deleteOne({ _id: userIdD });
  res.redirect('/User')
}
module.exports = {
  handlegetHome,
  handlegetUser,
  handleHome,
  handleCreateUser,
  handleFixuser,
  handleUpdateUser,
  handleDelete,
  handlesucces
};
