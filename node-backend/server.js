const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb://127.0.0.1:27017/resourcebooking"
)
.then(() => {
  console.log("MongoDB Connected");
})
.catch(err => console.log(err));

const logRoutes = require("./routes/logs");

app.use("/api/logs", logRoutes);

app.listen(5000, () => {
  console.log(
    "Node Server Running On Port 5000"
  );
});