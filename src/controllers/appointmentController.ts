import { Request, Response } from "express";
import { Appointment } from "../models/Appointment";
import { User } from "../models/User";

//Crear cita
export const createAppointments = async (req: Request, res: Response) => {
    try {
        const appointmentDate = req.body.appointment_date;
        const userId = req.tokenData.userId;
        const serviceId = req.body.service_id;

        const newAppointment = await Appointment.create(
            {
                appointment_date: appointmentDate,
                user: {
                    id: userId
                },
                service: {
                    id: serviceId
                }
            }
        ).save()

        res.status(201).json(
            {
                succes: true,
                message: "Appointment created",
                date: newAppointment

            })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Cant create appointment",
            error: error
        })
    }
}

//Actualizar cita
export const updateAppointments = async (req: Request, res: Response) => {
    try {
        const appointmentDate = req.body.appointment_date;
        const appointmentId = req.body.appointment_id as number;
        const serviceId = req.body.service_id;

        const appointment = await Appointment.findOneBy({
            id: appointmentId
        })

        if (!appointment) {
            return res.status(404).json({
                success: false,
                message: "The appointment has not exist"
            })
        }
        if (appointment.user.id != req.tokenData.userId) {
            return res.status(400).json({
                success: false,
                message: "The appointment has not exist" //"The user has not rights to modify the appointment"
            })
        }

        const appointmentUpdate = await Appointment.update(
            {
                id: appointmentId
            },
            {
                appointment_date: appointmentDate,
                service: {
                    id: serviceId
                }
            }
        )       
        return res.status(200).json({
            success: true,
            message: "Appointment update",
            date: appointmentUpdate
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Appointment cant be update",
            error: error
        })
    }
}

//Recuperar cita
export const getAppointmentsById = async (req: Request, res: Response) => {
    try {
        const appointmentId = req.params.id;

        const appointment = await Appointment.findOneBy(
            {
                id: parseInt(appointmentId),
            }
        )

        if (!appointment) {
            return res.status(404).json({
                success: false,
                message: "Appointment not found"
            })
        }

        res.status(200).json({
            success: true,
            message: "Appointments retrieved successfully",
            data: appointment
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "It is not possible to recover the appointments",
            error: error
        })
    }
}

//Ver mis citas
export const getAppointments = async (req: Request, res: Response) => {
    try {
        const userId = req.tokenData.userId;

        // const appointments = await Appointment.find(
        //     {
        //         where: {
        //             user:
        //             {
        //                 id: userId
        //             }
        //         }
        //     }
        // )


        const appointments = await User.findOne( // SOLUCION DANI
            {
                where: 
                {
                    id: userId
                },
                relations: {
                    role: true,
                    appointment: {
                        service: true
                    }
                    
                }

            }
        )

        if (!appointments) {
            return res.status(400).json({
                success: false,
                message: "Appointments not found ",

            })
        }

        res.status(200).json({
            success: true,
            message: "Appointments retrieved successfully",
            data: appointments

        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "It is not possible to recover the appointments",
            error: error
        })
    }
}

//Eliminar mis citas
export const deleteAppointments = async (req: Request, res: Response) => {
    try {

        const appointmentId = req.params.id;
        const userId = req.tokenData.userId

        const appointment: any = await Appointment.findOneBy({
            id: parseInt(appointmentId),
        })

        if (!appointment) {
            return res.status(404).json({
                success: false,
                message: "Service doesnt exist"
            })
        }

        // if(userId !== appointment.user_id) {
        //     console.log(userId)
        //     console.log(appointment.user_id)
        //     return res.status (400).json({
        //         success: false,
        //         message: "Unauthorized to delete this appointment"
        //     })
        // }
       

        const appointmentDelete = await Appointment.remove(appointment)

        res.status(200).json(
            {
                succes: true,
                message: "Appointment delete",
                data: appointmentDelete
            }
        )
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Cant delete appointment",
            error: error
        })
    }
}