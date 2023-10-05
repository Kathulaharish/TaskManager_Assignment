import userModel from '../models/userModel.js'
import JWT from 'jsonwebtoken'

export const registerController = async (req, res)=>{
    try{
        const {name, email, password, phone, address} = req.body

        //validation
        if(!name){
            return res.send({error: 'Name is required'})
        }
        if(!email){
            return res.send({error: "Email is Required"})
        }
        if(!password){
            return res.send({error: "Password is required"})
        }
        if(!phone){
            return res.send({error: "Phone is required"})
        }
        if(!address){
            return res.send({error: "Address is required"})
        }

        //existing user or not

        const existing_user = await userModel.findOne({email})
        if(existing_user){
            res.status(200).send({
                success: true,
                message: "Already Register please login"
            })
        }

        //register user
        const user = await new userModel ({name, email, phone, address, password}).save();

        res.status(201).send({
            success: true,
            message: "User Registered Successfully",
            user
        })
    }catch(error){
        console.log(error)
        res.status(500).send({
            success: false,
            message:'Error in Registration'
        })
    }
}

export const LoginController = async (req, res)=>{
    try{
        const {email, password} = req.body
        //validation

        if(!email || !password){
            return res.status(404).send({
                success: false,
                message: "Invalid email or password"
            })
        }

        //check user and password
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(404).send({
                success: false,
                message: "Email is not registed"
            })
        }
        if(password !== user.password){
            return res.status(500).send({
                success: false,
                message: "Invalid Password"
            })
        }
        //token
        const token = await JWT.sign({_id:user._id}, process.env.JWT_SECRET, {expiresIn:'5d'})

        res.status(200).send({
            success: true,
            message:'login Successfully',
             user:{
                name:user.name,
                email:user.email,
                phone: user.phone,
                address: user.address
             },
             token
        })
    }catch(error){
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in Login",
            error
        })
    }
}

//test controller
export const testController = (req, res)=>{
    
}