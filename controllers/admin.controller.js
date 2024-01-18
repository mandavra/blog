const { adminservice } = require("../services");

const addadmin = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);

    const admin = await adminservice.addadmin(body);
    console.log(req.body);
    
    res.status(201).json({
      message: "admin Created success",
  
      data: admin,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};


const getadmin = async (req, res) => {
    const admin = await adminservice.getadmin();
  
    console.log(admin, "get");
  
    res.status(200).json({
      message: "admin get success",
      data: admin,
    });
  };
  


  const deleteadmin = async (req, res) => {

  
    let id = req.params.id;
  
    const admin = await adminservice.deleteadmin(id);
  
  
    console.log(admin, "delete");
  
    res.status(200).json({
      message: "admin delete success",
      data: admin,
    });
  };  
  
module.exports = { addadmin,getadmin,deleteadmin};
