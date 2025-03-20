<<<<<<< HEAD
//OS MODULE

const os = require('os');


//info about current user

const user = os.userInfo();
console.log(user)
//method returns the system uptime in seconds

console.log(`The system uptime is ${os.uptime}`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS);
=======
console.log('Task Manager App')
const port = process.env.PORT || 3000
const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require ('./db/connect')
require('dotenv').config()
const errorHandler = require('./middleware/error-handler')

//we wont have data in req.bod if we dont use this 
//middleware
app.use(express.static('./public'))
app.use(express.json())



//routes
app.get('/',(req,res) =>
res.send('task manager app'))

app.use('/api/v1/tasks', tasks)
//a custom 404 error handler

app.use(errorHandler)

const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port ${port}...`))
    }
    catch(error){
        console.log(error)

    }
}
start()
//get all tasks
//create a new task
//get single task
//update task
//delete task
>>>>>>> 916de71 (TaskManager using node and express js)
