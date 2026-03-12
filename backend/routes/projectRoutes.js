const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");

const {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject
} = require("../controllers/projectController");

router.post("/", verifyToken, createProject);

router.get("/", verifyToken, getProjects);

router.get("/:id", verifyToken, getProjectById);

router.put("/:id", verifyToken, updateProject);

router.delete("/:id", verifyToken, deleteProject);

module.exports = router;