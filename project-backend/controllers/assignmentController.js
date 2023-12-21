const Assignment = require('../models/assignmentModel')
const mongoose = require('mongoose')

// get all assignments
const getAssignments = async (req, res) => {
  const assignments = await Assignment.find({}).sort({createdAt: -1})

  res.status(200).json(assignments)
}

// get a single Assignment
const getAssignment = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Does not exist'})
  }

  const assignment = await Assignment.findById(id)

  if (!assignment) {
    return res.status(404).json({error: 'Does not exist'})
  }

  res.status(200).json(assignment)
}

// create a new assignments
const createAssignment = async (req, res) => {
  const {title, dueDate, whichModule} = req.body

  // add to the database
  try {
    const assignment = await Assignment.create({ title, dueDate, whichModule })
    res.status(200).json(assignment)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete an assignment
const deleteAssignment = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'Does not exist'})
  }

  const assignment = await Assignment.findOneAndDelete({_id: id})

  if(!assignment) {
    return res.status(400).json({error: 'Does not exist'})
  }

  res.status(200).json(assignment)
}

// update an assignment
const updateAssignment = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'Does not exist'})
  }

  const assignment = await Assignment.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!assignment) {
    return res.status(400).json({error: 'Does not exist'})
  }

  res.status(200).json(assignment)
}

module.exports = {
  getAssignments,
  getAssignment,
  createAssignment,
  deleteAssignment,
  updateAssignment
}