import { Request, Response } from "express";
import { Appointment } from "../models/Appointment";

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

        const appointment = await Appointment.findOneBy({
            id: appointmentId
        })

        if (!appointment) {
            return res.status(404).json({
                success: false,
                message: "The appointment has not exists"
            })
        }

        console.log(appointmentDate)

        if (appointment?.user.id != req.tokenData.userId) {
            return res.status(400).json({
                success: false,
                message: "The user has not rights to modify the appointment"
            })
        }

        const appointmentUpdate = await Appointment.update(
            {
                id: appointmentId
            },
            {
                appointment_date: appointmentDate
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

        const appointments = await Appointment.find (
            {
                where: {
                    user:
                    {
                        id: userId
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