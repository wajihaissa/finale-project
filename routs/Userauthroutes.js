const express = require("express");
const UserRoutes = express.Router();
const User = require("../modules/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {loginrules,registerrules,validation}=require("../middleware/validtaor");
const { findOneAndDelete } = require("../modules/services");
const saltRounds = 10;
//register
UserRoutes.post("/register",registerrules(),validation, async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  try {
    const newUser = new User({ firstname, lastname, email, password });
    // checkin if the email is unique
    const checkin = await User.findOne({ email });
    if (checkin) {
      res.status(400).send({ msg: "user exsits" });
    }
    //hashin passwords
    const gensalt = await bcrypt.genSalt(saltRounds);
    const hashedpassword = await bcrypt.hash(password, gensalt);
    newUser.password = hashedpassword;

    // creatin token

    const newUserToken = await newUser.save();
    const payload = {
      _id: newUserToken._id,
      name: newUserToken.firstname,
      lastname: newUserToken.lastname,
    };
    const token = await jwt.sign(payload, process.env.secretkey, {
      expiresIn: 100000000,
    });
    res.status(200).send({
      user: newUserToken,
      msg: "user saved",
      token: `bearer ${token}`,
    });
  } catch (error) {
    return res.status(500).send({ msg: "can t sign user in" });
  }
});

//login in
UserRoutes.post("/login",loginrules(),validation, async (req, res) => {
  const { email, password } = req.body;
  try {
    // checkin email

    const searchedUser = await User.findOne({ email });
    if (!searchedUser) {
      return res.status(400).send({ msg: "bad credentials" });
    }
    //checkin password
    const testinpass = await bcrypt.compareSync(
      password,
      searchedUser.password
    );
    if (!testinpass) {
      return res.status(400).send({ msg: "bad credentials" });
    }
    //creatin token
    const payload = {
      _id: searchedUser.id,
      name: searchedUser.firstname,
      lastname: searchedUser.lastname,
    };
    const token = await jwt.sign(payload, process.env.secretkey, {
      expiresIn: 60 * 60,
    });
    console.log(token);

    res.status(201).send({ user: searchedUser, msg: "welcome" });
  } catch (error) {
    return res.status(500).send({ msg: "can t log user in" });
  }
});
UserRoutes.delete("/:id",async(req,res)=>{
  try {
    const removeuser=await User.findByIdAndRemove({_id:req.params.id})
    res.status(200).send({msg:"user deleted"})
    
  } catch (error) {
    res.send({msg:"cdn t delete user"})
    
  }
})

module.exports = UserRoutes;
