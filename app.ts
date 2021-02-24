// const express = require('express')

// import express = require('express')
import express from 'express'
import todoRoute from './routes/todo'

const app = express()
app.use(todoRoute)

app.listen(3000)