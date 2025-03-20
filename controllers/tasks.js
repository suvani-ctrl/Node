const Task = require('../models/Task')

const getAllTasks = async(req,res) =>
{

    try{
        const tasks = await Task.find({})
        res.status(200).json({tasks})
    }
    catch(error)
    {
        res.status(500).json({msg: error})
    }
}

const createTask = async (req,res)=>
{
    try{
    const task = await Task.create(req.body)
    res.status(201).json({task})
    }
    catch(error)
    {
        res.status(500).json({msg: error})
    }
}


const getTask = async (req, res, next) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findOne({ _id: taskID });

        if (!task) {
            const error = new Error('Task not found');
            error.status = 404;
            return next(error);
        }

        res.status(200).json({ task });
    } catch (error) {
        next(error); // Pass error to the error-handling middleware
    }
};


//put vs patch are both for updating the resource but when we use put we try to use put we are trying to replace existional resource but when we 
//use patch we are partially updating the data
const updateTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findOneAndUpdate(
            { _id: taskID }, 
            req.body, 
            { new: true, runValidators: true }
        );

        if (!task) {
            return res.status(404).json({ msg: `No task found with id: ${taskID}` });
        }

        res.status(200).json({ task });
    } catch (error) {
        res.status(500).json({ msg: 'Something went wrong', error: error.message });
    }
};


const editTask=async (req, res) => {
    try {
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

    } catch (error) {
        res.status(500).json({ msg: error.message || `Error updating task with id: ${taskID}` });
    }
};

const deleteTask = async(req,res)=>
{
    try {
        const {id:taskID} = req.params
        const task = await Task.findOneAndDelete({_id: taskID});
        if(!task)
        {
            return res.status(404).json({msg: `no task with id ${taskID}`});
        }
        res.status(200).json({task})
    } 
    catch (error) {

        res.status(500).json({msg: error});
    }

}
module.exports = {
    getAllTasks,
    createTask,
    getTask,
    editTask,
    deleteTask,
    updateTask,
}
