import { Request, Response } from "express";
import { User } from "../models/User";
import bcrypt from "bcrypt";

export const register = async (req: Request, res: Response) => {
    try {
        console.log(req.body);

        const firstName = req.body.first_name;
        const lastName = req.body.last_name;
        const email = req.body.email;
        const passwordHash = req.body.password_hash;

        //validacion contraseña
        if(passwordHash.length < 7 || passwordHash.length > 12) {
            return res.status(400).json({
                success: false,
                message: "The password must be between 7 and 12 caracteres"
            })
        }

        //validacion email
        const validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if (!validEmail.test(email) ){
          return res.status(400).json(
            {
              success: false,
              message: "Format email invalid"
            }
          )
        } 

        const passwordEncrypted = bcrypt.hashSync(passwordHash, 8);

        const newUser = await User.create({

            first_name: firstName,
            last_name: lastName,
            email: email,
            password_hash: passwordEncrypted,
            role: {
                id: 1
            }
        }).save()

        return res.status(201).json(
            {
                success: true,
                message: "User registered successfully",
            }
        )

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "User cant be register",
            error: error
        })
    }
}