const mongoose = require('mongoose')

//setting up via cli
const TaskSchema = new mongoose.Schema(
    {
//only property here would be passed in the database
        name:
        {
            type:String,
            required:[true,'must provide a name'],
            trim: true,
            maxlength: [20, 'cant be more than 20 letters']
        },
        completed:
        {
            type:Boolean,
            default:false,
        },

    }
)

module.exports = mongoose.model('Task',TaskSchema)