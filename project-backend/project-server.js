require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const assignmentRoutes = require('./routes/assignments')

// express app
const projectapp = express()

// middleware
projectapp.use(express.json())

projectapp.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
//routes
projectapp.use('/api/assignments', assignmentRoutes)

//connect to DB 
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        projectapp.listen(process.env.PORT, () => {
            console.log('connected to db and running on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
