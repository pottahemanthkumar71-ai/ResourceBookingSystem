const express = require("express");
const router = express.Router();

const UsageLog =
require("../models/UsageLog");

router.get("/", async (req,res)=>{

  const logs =
  await UsageLog.find();

  res.json(logs);

});

router.post("/", async (req,res)=>{

  const log =
  new UsageLog(req.body);

  await log.save();

  res.json(log);

});

router.delete("/:id", async(req,res)=>{

  await UsageLog.findByIdAndDelete(
    req.params.id
  );

  res.json({
    message:"Deleted"
  });

});

module.exports = router;