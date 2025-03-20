//async wrappers

const asyncWrappers = (func) =>
{
    return async(req,res,next) =>
    {
        try {
            await func(req,res,next)//frome xpress.js
        } catch (error) {


            next(error)
            
        }
    }
}

module.exports = asyncWrappers;