import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { TokenData } from "../types";

export const auth = async (req: Request, res: Response, next: NextFunction) => {

    console.log("Soy el auth middleware");

    // split convierte el string en un array. Me coge el segundo array que es la posicion [1]
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json(
                {
                    success: false,
                    message: "Unauthorized"
                }
            )
        }
        // decodificar el toquen y verificarlo, lo guardardo en una variable llamada decoded
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET as string
        )

        req.tokenData = decoded as TokenData;

        next();

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Jwt not valid or malformated",
            error: error
        })
    }
}
