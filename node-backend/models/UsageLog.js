const mongoose = require("mongoose");

const UsageLogSchema =
new mongoose.Schema({

  resourceId: String,

  userEmail: String,

  action: String,

  timestamp: {
    type: Date,
    default: Date.now
  }

});

module.exports =
mongoose.model(
  "UsageLog",
  UsageLogSchema
);