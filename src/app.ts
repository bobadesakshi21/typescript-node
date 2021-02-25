// const express = require('express')

// import express = require('express')
import express from 'express'
import bodyParser from 'body-parser'
import todoRoute from './routes/todo'

const app = express()

app.use(bodyParser.json())
app.use(todoRoute)

app.listen(3000)