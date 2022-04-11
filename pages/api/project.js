const Project = require("../../server/models/Project");

const projectController = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(401).json({ message: "Request method is not allowed" });
  }
  const data = req.body;
  try {
    const project = await Project.create(data);
    res.status(201).json({ project, message: "Project created" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export default projectController;
