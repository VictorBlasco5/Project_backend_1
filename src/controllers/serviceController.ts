import { Request, Response } from "express";
import { Service } from "../models/Service";

//VER TODOS LOS SERVICIOS
export const getServices = async (req: Request, res: Response) => {
    try {
        const services = await Service.find({
            select: {
                id: true,
                service_name: true,
                description: true
            }
        })
        res.status(200).json(
            {
                succes: true,
                message: "Services retrieved successfuly",
                data: services
            }
        )
    }catch(error){
        res.status(500).json({
            success: false,
            message: "It is not possible to recover the services",
            error: error
        })
    }
}

//CREAR SERVICIO
export const createServices = async (req: Request, res: Response) => {
    try {
        
        const serviceName = req.body.service_name;
        const description = req.body.description;

        const newService = await Service.create({
            service_name: serviceName,
            description: description 
        }).save()

        res.status(201).json(
            {
                succes: true,
                message: "Service created",
                date: newService
            })
    } catch(error) {
        res.status(500).json({
            success: false,
            message: "Cant create service",
            error: error
        })
    }
}

//MODIFICAR SERVICIO
export const updateServices = async (req: Request, res: Response) => {
    try{

        const serviceId = req.params.id;
        const serviceName = req.body.service_name;
        const description = req.body.description;
        
        //validacion de datos
        const service = await Service.findOneBy({
            id: parseInt(serviceId)
        })

        if(!service) {
            return res.status(404).json({
                success: false,
                message: "Service not found"
            })
        }

        //actualizar en BD
        const serviceUpdate = await Service.update(
            {
                id: parseInt(serviceId)
            },
            {
                service_name: serviceName,
                description: description
            }
        )

        res.status(200).json(
            {
                succes: true,
                message: "Service update",
                data: serviceUpdate
            }
        )

    } catch (error){
        res.status(500).json({
            success: false,
            message: "Cant update service",
            error: error
        })
    }
}

//ELIMINAR SERVICIO
export const deleteServices = async (req: Request, res: Response) => {
    try{

        const serviceId = req.params.id;

        //validacion de datos
        const serviceToRemove: any = await Service.findOneBy({
            id: parseInt(serviceId),
        })

        if(!serviceToRemove) {
            res.status(404).json({
                success: false,
                message: "Service cant be delete"
            })
        }

         //actualizar en BD
        const serviceDelete = await Service.remove(serviceToRemove)

        res.status(200).json(
            {
                succes: true,
                message: "Service delete",
                data: serviceDelete
            }
        )

    } catch (error){
        res.status(500).json({
            success: false,
            message: "Cant delete service",
            error: error
        })
    }
}