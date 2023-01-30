const express = require("express");
const services = require("../modules/services");

const ServicesRoutes = express.Router();


//cruds add services
ServicesRoutes.post("/addservice", async (req, res) => {
  const { name, price, companyName, type,logo } = req.body;
  try {
    const newService = new services({ name, price, companyName, type, logo });
    console.log(newService)
    await newService.save();
    res.status(200).send({ newService, msg: "service added succefully" });
  } catch (error) {
    res.send({ msg: "service added fail" });
  }
});

//cruds remove service
ServicesRoutes.delete("/:id", async (req, res) => {
  try {
    const result = await services.findOneAndRemove({ _id: req.params.id });
    res.send({ msg: "service deleted" });
  } catch (error) {
    console.log(error);
    res.send({ msg: "cdn t delete server" });
  }
});
/*ServicesRoutes.get("/:name", async (req, res) => {
  try {
    const result = await services.findOne({ name: req.params.name });
    res.status(201).send({ result, msg: "service found" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "service not found" });
  }
});*/
ServicesRoutes.get("/all", async (req, res) => {
  try {
    let result = await services.find();
    res.send({ result, msg: " All services" });
  } catch (error) {
    console.log(error);
    res.send({ msg: "fail" });
  }
});

module.exports = ServicesRoutes;
