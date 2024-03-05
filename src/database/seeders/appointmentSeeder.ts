import { Appointment } from "../../models/Appointment";
import { AppDataSource } from "../db";


export const appointmentSeedDatabase = async () => {
    try {
        await AppDataSource.initialize()

        const appointment1 = Appointment.create({
            appointment_date: "2024-04-04 09:30:00",
            user: { id: 1 },
            service: { id: 1 }
        });
        await appointment1.save();

        const appointment2 = Appointment.create({
            appointment_date: "2024-04-04 11:30:00",
            user: { id: 2 },
            service: { id: 1 }
        });
        await appointment2.save();

        const appointment3 = Appointment.create({
            appointment_date: "2024-04-04 12:30:00",
            user: { id: 3 },
            service: { id: 3 }
        });
        await appointment3.save();

        const appointment4 = Appointment.create({
            appointment_date: "2024-04-05 10:00:00",
            user: { id: 4 },
            service: { id: 1 }
        });
        await appointment4.save();

        const appointment5 = Appointment.create({
            appointment_date: "2024-04-05 12:30:00",
            user: { id: 5 },
            service: { id: 3 }
        });
        await appointment5.save();

        const appointment6 = Appointment.create({
            appointment_date: "2024-04-06 12:00:00",
            user: { id: 6 },
            service: { id: 1 }
        });
        await appointment6.save();

        const appointment7 = Appointment.create({
            appointment_date: "2024-04-07 11:15:00",
            user: { id: 7 },
            service: { id: 4 }
        });
        await appointment7.save();

        const appointment8 = Appointment.create({
            appointment_date: "2024-04-08 09:00:00",
            user: { id: 8 },
            service: { id: 2 }
        });
        await appointment8.save();

        const appointment9 = Appointment.create({
            appointment_date: "2024-04-08 12:30:00",
            user: { id: 9 },
            service: { id: 3 }
        });
        await appointment9.save();

        const appointment10 = Appointment.create({
            appointment_date: "2024-04-09 09:30:00",
            user: { id: 10 },
            service: { id: 4 }
        });
        await appointment10.save();

        const appointment11 = Appointment.create({
            appointment_date: "2024-04-10 09:00:00",
            user: { id: 1 },
            service: { id: 2 }
        });
        await appointment11.save();

        const appointment12 = Appointment.create({
            appointment_date: "2024-04-10 11:30:00",
            user: { id: 2 },
            service: { id: 5 }
        });
        await appointment12.save();

        const appointment13 = Appointment.create({
            appointment_date: "2024-04-11 10:30:00",
            user: { id: 3 },
            service: { id: 1 }
        });
        await appointment13.save();

        const appointment14 = Appointment.create({
            appointment_date: "2024-04-12 12:00:00",
            user: { id: 4 },
            service: { id: 4 }
        });
        await appointment14.save();

        const appointment15 = Appointment.create({
            appointment_date: "2024-04-15 09:30:00",
            user: { id: 5 },
            service: { id: 2 }
        });
        await appointment15.save();

        const appointment16 = Appointment.create({
            appointment_date: "2024-04-15 12:30:00",
            user: { id: 6 },
            service: { id: 5 }
        });
        await appointment16.save();

        const appointment17 = Appointment.create({
            appointment_date: "2024-04-16 10:00:00",
            user: { id: 7 },
            service: { id: 1 }
        });
        await appointment17.save();

        const appointment18 = Appointment.create({
            appointment_date: "2024-04-18 09:30:00",
            user: { id: 8 },
            service: { id: 3 }
        });
        await appointment18.save();

        const appointment19 = Appointment.create({
            appointment_date: "2024-04-18 12:30:00",
            user: { id: 9 },
            service: { id: 1 }
        });
        await appointment19.save();

        const appointment20 = Appointment.create({
            appointment_date: "2024-04-20 09:30:00",
            user: { id: 10 },
            service: { id: 5 }
        });
        await appointment20.save();


        console.log('---------------------------------------');
        console.log('Appointments successfully saved ');    
        console.log('---------------------------------------');    
    } catch (error) {
        console.log(error);
    } finally {
        await AppDataSource.destroy()
    }
}
