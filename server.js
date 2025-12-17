const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const trafficRoutes = require("./routes/trafficRoutes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/trafficDB")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

app.use("/api/traffic", trafficRoutes);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
