const express = require('express')
const router = express.Router();


//functions exports

const{
    getAllTasks,
    createTask,
    getTask,
    deleteTask,
    updateTask,
    editTask,
}
= require ('../controllers/tasks')

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask).put(editTask)

module.exports = router;