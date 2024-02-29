import { Request, Response } from "express";
import { User } from "../models/User";

export const getUsers = async (req:Request, res:Response) => {
    try {
        const users = await User.find(
            {
                select: {
                    id: true,
                    first_name: true,
                    last_name: true,
                    email: true,
                }
            }
        )

        res.status(200).json({
            success: true,
            message: "users retrieved successfully",
            data: users
        })

    } catch(error) {
        res.status(500).json({
            success: false,
            message: "It is not possible to recover the users",
            error: error
        })
    }
}

export const getUserById = async (req:Request, res:Response) => {
    try{
        const userId = req.params.id;
        
        //validacion de datos
        const user = await User.findOneBy(
            {
                id: parseInt(userId)
            }
        )

        if(!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }

        res.status(200).json({
            success: true,
            message: "users retrieved",
            data: user
        })
        
    }catch (error){
        res.status(500).json({
            success: false,
            message: "User cant be retrieved",
            error: error
        })
    }
}