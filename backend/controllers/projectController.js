const Project = require("../models/projectModel");

// CREATE PROJECT
exports.createProject = async (req, res) => {
  try {

    const { name, description, start_date, end_date, status } = req.body;

    const project = await Project.create({
      name,
      description,
      start_date,
      end_date,
      status,
      created_by: req.user.id
    });

    res.status(201).json({
      message: "Project created successfully",
      data: project
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// GET ALL PROJECTS
exports.getProjects = async (req, res) => {
  try {

    const projects = await Project.findAll();

    res.status(200).json(projects);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// GET PROJECT BY ID
exports.getProjectById = async (req, res) => {
  try {

    const project = await Project.findByPk(req.params.id);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.json(project);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// UPDATE PROJECT
exports.updateProject = async (req, res) => {
  try {

    const id = req.params.id;

    await Project.update(req.body, {
      where: { id }
    });

    res.json({ message: "Project updated successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// DELETE PROJECT
exports.deleteProject = async (req, res) => {
  try {

    const id = req.params.id;

    await Project.destroy({
      where: { id }
    });

    res.json({ message: "Project deleted successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};