const User = require("../models/user.model");

const addUser = async (req, res) => {
    const { email, firstName, lastName,nic,address,age,mobile} =
      req.body;
  
    const newage = new User({
      email, 
      firstName, 
      lastName,
      nic,
      address,
      age,
      mobile
    });
  
    await newage
      .save()
      .then(() => res.json('User added!'))
      .catch((error) => res.status(400).json("Error: " + error));
  };

  const getUsers = async (req, res) => {
    try {
      const age = await User.find()
      res.json(age);
    } catch (error) {
      res.status(500).send("Server Error" + error);
    }
  };

  const getUserById = async (req, res) => {
    try {
      const age = await User.findById(req.params.id);
      res.json(age);
    } catch (error) {
      res.status(500).send("Server Error" + error);
    }
  };

  const updateUser = async (req, res) => {
    User.findByIdAndUpdate(req.params.id)
    // email, firstName, lastName,nic,address,age,mobile
      .then((existingUser) => {
        existingUser.email = req.body.email;
        existingUser.firstName = req.body.firstName;
        existingUser.lastName = req.body.lastName;
        existingUser.nic = req.body.nic;
        existingUser.address = req.body.address;
        existingUser.age = req.body.age;
        existingUser.mobile = req.body.mobile;
        
        existingUser
          .save()
          .then(() => res.json('User updated!'))
          .catch((error) => res.status(400).json("Error: " + error));
      })
      .catch((error) => res.status(400).json("Error: " + error));
  };
  
  const addResponse = async (req, res) => {
    User.findByIdAndUpdate(req.params.id)
        // email, firstName, lastName,nic,address,age,mobile

      .then((existingUser) => {
        existingUser.email = req.body.email;
        existingUser.firstName = req.body.firstName;
        existingUser.lastName = req.body.lastName;
        existingUser.nic = req.body.nic;
        existingUser.address = req.body.address;
        existingUser.age = req.body.age;
        existingUser.mobile = req.body.mobile;
        
        existingUser
          .save()
          .then(() => res.json('Response Added!'))
          .catch((error) => res.status(400).json("Error: " + error));
      })
      .catch((error) => res.status(400).json("Error: " + error));
  };

  const deleteUser = async (req, res) => {
    User.findByIdAndDelete(req.params.id)
      .then((deletedUser) => {
        res.json('User deleted');
      })
      .catch((error) => res.status(400).json("Error: " + error));
  };

  
  module.exports = {
    addUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
    addResponse
  
   
  }