const express = require('express');
require('./db/mongoose')
const bcrypt = require('bcryptjs')
const { findByIdAndUpdate, db } = require('./models/user');
const app = express()
const port = process.env.PORT 
app.use(express.json())
const userRouter = require('./router/user')
const taskRouter = require('./router/task');
const tasks = require('./models/tasks');
app.use(userRouter)
app.use(taskRouter)

app.listen(port,() => {
    console.log('server is  running on port '+ port);
})
