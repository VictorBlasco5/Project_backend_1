import { Request, Response } from "express";
import { User } from "../models/User";


//VER TODOS LOS USUARIOS
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

// VER PERFIL USUARIO
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

// MOFIFICAR DATOS PERFIL
export const updateUserById = async (req:Request, res:Response) => {
    try {

        const userId = req.params.id;
        const firstName = req.body.first_name;
        const lastName = req.body.last_name;
        const email = req.body.email;

        //validacion de datos
        const user = await User.findOneBy ({
            id: parseInt(userId)
        })

        if(!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }

        //actualizar en BD
        const userUpdate = await User.update(
            {
                id: parseInt(userId)
            },
            {
                first_name: firstName,
                last_name: lastName,
                email: email
            }
        )

        res.status(200).json({
            succes: true,
            message: "User update",
            date: userUpdate
        })

    } catch (error){
        res.status(500).json({
            success: false,
            message: "User cant be update",
            error: error
        })
    }
}