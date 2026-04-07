import Project from '../models/Project.js';

// @desc    Get all projects
// @route   GET /api/projects
// @access  Public
export const getProjects = async (req, res, next) => {
  try {
    const projects = await Project.find({});
    res.json(projects);
  } catch (error) {
    next(error);
  }
};

// @desc    Create a project
// @route   POST /api/projects
// @access  Public (in real app, would be Private/Admin)
export const createProject = async (req, res, next) => {
  try {
    const project = new Project(req.body);
    const createdProject = await project.save();
    res.status(201).json(createdProject);
  } catch (error) {
    next(error);
  }
};

// @desc    Update a project
// @route   PUT /api/projects/:id
// @access  Public (in real app, would be Private/Admin)
export const updateProject = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);
    if (project) {
      Object.assign(project, req.body);
      const updatedProject = await project.save();
      res.json(updatedProject);
    } else {
      res.status(404);
      throw new Error('Project not found');
    }
  } catch (error) {
    next(error);
  }
};

// @desc    Delete a project
// @route   DELETE /api/projects/:id
// @access  Public (in real app, would be Private/Admin)
export const deleteProject = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);
    if (project) {
      await project.deleteOne();
      res.json({ message: 'Project removed' });
    } else {
      res.status(404);
      throw new Error('Project not found');
    }
  } catch (error) {
    next(error);
  }
};
