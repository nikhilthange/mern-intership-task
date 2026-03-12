const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");

const {
  createDPR,
  getProjectDPR
} = require("../controllers/dprController");

router.post("/projects/:id/dpr", verifyToken, createDPR);

router.get("/projects/:id/dpr", verifyToken, getProjectDPR);

module.exports = router;