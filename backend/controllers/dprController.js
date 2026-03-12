const DailyReport = require("../models/dprModel");


// CREATE DPR
exports.createDPR = async (req, res) => {

  try {

    const projectId = req.params.id;

    const { date, work_description, weather, worker_count } = req.body;

    if (!date || !work_description) {
      return res.status(400).json({
        message: "Date and work_description are required"
      });
    }

    const newDPR = await DailyReport.create({
      project_id: projectId,
      user_id: req.user.id,
      date,
      work_description,
      weather,
      worker_count
    });

    res.status(201).json({
      message: "DPR created successfully",
      data: newDPR
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};



// GET DPR BY PROJECT
exports.getProjectDPR = async (req, res) => {

  try {

    const projectId = req.params.id;

    const reports = await DailyReport.findAll({
      where: { project_id: projectId }
    });

    res.status(200).json(reports);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};