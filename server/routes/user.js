const router = require('express').Router();
const { response } = require('express');
let User = require("../models/user.model");

const {
    addUser,
    getUsers,
    updateUser,
    getUserById,
    deleteUser,
    //addResponse1
   
  } = require("../controller/user.controller");

  router.post("/", addUser);

  router.get("/", getUsers);

  router.get("/:id", getUserById);

  router.put("/:id", updateUser);

  //router.put("/response/:id", addResponse1);

  router.delete("/:id", deleteUser);

module.exports = router;