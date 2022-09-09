const express = require("express");
const services = require("../modules/services");

const ServicesRoutes = express.Router();
const Serivce = require("../modules/services");

//cruds add services
ServicesRoutes.post("/addservice", async (req, res) => {
  const { name, price, companyName, type } = req.body;
  try {
    newService = new Serivce({ name, price, companyName, type });
    await newService.save();
    res.status(200).send({ newService, msg: "service added succefully" });
  } catch (error) {
    res.status(200).send({ msg: "service added succefully" });
  }
});

//cruds remove service
ServicesRoutes.delete("/:id",async(req,res)=>{
    
  try {
    const result = await services.findOneAndRemove({_id:req.params.id})
    res.send({msg:"service deleted"})
  } catch (error) {
    console.log(error)
    res.send({msg:"cdn t delete server"})
  }
})
ServicesRoutes.get("/:name",async(req,res)=>{
try {
  const result= await services.findOne({name:req.params.name})
  res.status(201).send({result,msg:"service found"})

} catch (error) {
  console.log(error)
  res.status(500).send({msg:"service not found"})
  
}
})

module.exports = ServicesRoutes;
