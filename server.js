const express = require("express");
const cors = require("cors");

const estimateRoutes = require("./routes/estimateRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/estimate", estimateRoutes);

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});