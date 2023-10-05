import taskModel from "../models/taskModel.js"

export const createTaskController = async (req, res)=>{
    try{
        const {name} = req.body
        if(!name){
            return res.status(401).send({
                message: "Name is required"
            })
        }
        const task = await new taskModel({task})
        res.status(201).send({
            success: true,
            message:'new Task is created'
        })
    }catch(error){
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in Task"
        })
    }
}

