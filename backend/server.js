const express = require("express");
const cors = require("cors");
require("dotenv").config();

const sequelize = require("./config/database");

const authRoutes = require("./routes/authRoutes");
const projectRoutes = require("./routes/projectRoutes");
const dprRoutes = require("./routes/dprRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/projects", projectRoutes);
app.use("/", dprRoutes);

sequelize.sync().then(()=>{
 console.log("Database connected");
});

app.listen(process.env.PORT,()=>{
 console.log("Server running on port", process.env.PORT);
});