const express = require('express')
const {
    getAssignments, 
    getAssignment, 
    createAssignment, 
    deleteAssignment, 
    updateAssignment
  } = require('../controllers/assignmentController')

const router = express.Router()


// GET all assignments
router.get('/', getAssignments)

// GET a single assignment
router.get('/:id', getAssignment)

// Create a new assignment
router.post('/', createAssignment)
    
//Delete/Completed an assignment
router.delete('/:id', deleteAssignment)
//Update an assigment
router.patch('/:id', updateAssignment)


module.exports = router