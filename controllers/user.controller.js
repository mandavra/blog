const { userservice } = require("../services");

const addUser = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);
    const user = await userservice.addUser(body);
    console.log(req.body);
  
    res.status(201).json({
      message: "user Created success",  
      data: user,
    })
  
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const loginUser = async (req, res) => {
  const body = req.body;
  console.log(body);
  const email = req.body.email;
  const password = req.body.password;

  const findUser = await userservice.findUser(email);

  console.log(findUser);

  if (!findUser) {
    res.status(500).json({
      message: "user not found",
    });
  } else {
    if (password === findUser.password) {
        
      res.status(200).json({
        message: "login success",
        data: findUser,
      });
    } else {
      res.status(500).json({
        message: "invalid password",
      });
    }
  }

  
};


const getuser = async (req, res) => {
    const user = await userservice.getuser();
  
    console.log(user, "get");
  
    res.status(200).json({
      message: "user get success",
      data: user,
    });
  };
  


  const deleteuser = async (req, res) => {

  
    let id = req.params.id;
  
    const user = await userservice.deleteuser(id);
  
  
    console.log(user, "delete");
  
    res.status(200).json({
      message: "user delete success",
      data: user,
    });
  };  
  
module.exports = { addUser,loginUser,getuser,deleteuser};
