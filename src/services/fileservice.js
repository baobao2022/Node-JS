const path=require('path')


const handleuploadsingleAPI = async(fileobject)=>{
  let uploadPath = path.resolve(__dirname,"../public/img/uploadfile");// tạo đường dẫn
  // get image extension
  let exName=path.extname(fileobject.name);//png
  // get image without extention
  let baseName =path.basename(fileobject.name)
  console.log('check basename',baseName)
  //tạo 1 tên mới không bị trùng tên
  let finalName=`${baseName}-${Date.now()} ${exName}`
  let finalPath=`${uploadPath}/${finalName}`
  try {
    await fileobject.mv(finalPath)// move tới đường dẫn đã tạo
    return {
      status:'success',
      path:finalName,
      error:null}
  } catch (error) {
    return {
      status:'failed',
      path:null,
      error:JSON.stringify(error)}
  }
  // res.send('File uploaded to ' + uploadPath);
};
const handleuploadfilesAPI=async(fileobject)=>{
  console.log('check đầu vào',fileobject)
  let resultarr=[];
  let uploadPath = path.resolve(__dirname,"../public/img/uploadfile");// tạo đường dẫn
  console.log(  'check name',fileobject[0].name)
  
  // get image extension
  for(let i=0;i<fileobject.length;i++){

   let exName=path.extname(fileobject[i].name)
    // get image without extention
    let baseName =path.basename(fileobject[i].name)
    console.log('check basename',baseName)

    //tạo 1 tên mới không bị trùng tên
    let finalName=`${baseName}-${Date.now()} ${exName}`
    let finalPath=`${uploadPath}/${finalName}`
    
    try {
      await fileobject[i].mv(finalPath)// move tới đường dẫn đã tạo
      resultarr.push(
        {
          status:'success',
          path:uploadPath,
          filename:fileobject[i].name,
          error:null})
      } 
      catch (error) {
        resultarr.push({
          status:'failed',
          path:null,
          fileName:fileobject[i].name,
          error:error})
    }
    
    }
    return {
      detail:resultarr
    }

  }
module.exports={handleuploadfilesAPI,handleuploadsingleAPI}