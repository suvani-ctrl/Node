const Task = require('../models/Task')
const asyncWrappers = require('../../TaskManager/middleware/async')



const getAllTasks = asyncWrappers (async(req,res) =>
{
        const tasks = await Task.find({})
        res.status(200).json({success: true, data: {tasks,amount: tasks.length}})
    
}
)
const createTask = asyncWrappers(async (req,res)=>
{

    const task = await Task.create(req.body)
    res.status(201).json({task})
})

const getTask = asyncWrappers (async(req,res) =>
{
        const {id: taskID} = req.params
        const task = await Task.findOne({_id:taskID})
        if(!task)
    {
        return res.status(404).json({msg: `Task does not exists with id ${taskID}`})
    }
    res.status(200).json({task})

})
//put vs patch are both for updating the resource but when we use put we try to use put we are trying to replace existional resource but when we 
//use patch we are partially updating the data

const updateTask = asyncWrappers(async (req, res) => {
       const { id: taskID } = req.params;
        
        const task = await Task.findOneAndUpdate(
            { _id: taskID },  // Query
            req.body,         // Update Data
            {
                new: true,          // Returns the updated document
                runValidators: true // Runs validation on update
            }
        );

        if (!task) {
            return res.status(404).json({ msg: `No task found with id: ${taskID}` });
        }

        res.status(200).json({ task });

    
});

const editTask= asyncWrappers (async (req, res) => {
  
        const { id: taskID } = req.params;
        
        const task = await Task.findOneAndUpdate(
            { _id: taskID },  // Query
            req.body,         // Update Data
            {
                new: true,          // Returns the updated document
                runValidators: true // Runs validation on update
            }
        );

        if (!task) {
            return res.status(404).json({ msg: `No task found with id: ${taskID}` });
        }

        res.status(200).json({ task });

     
});

const deleteTask = asyncWrappers(async(req,res)=>
{
   
        const {id:taskID} = req.params
        const task = await Task.findOneAndDelete({_id: taskID});
        if(!task)
        {
            return res.status(404).json({msg: `no task with id ${taskID}`});
        }
        res.status(200).json({task})
    
   

});
module.exports = {
    getAllTasks,
    createTask,
    getTask,
    editTask,
    deleteTask,
    updateTask,
}
