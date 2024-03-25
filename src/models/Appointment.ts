import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Service } from "./Service";
import { User } from "./User";

@Entity('appointments')
export class Appointment extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ name: 'appointment_date' })
    appointment_date!: Date

    //eagler:true hace que siempre me devuelva el servicio porque por defecto no me lo trae
    @ManyToOne(() => Service, (service) => service.appointments, {eager: true}) 
    @JoinColumn ({ name: "service_id" })
    service!: Service;

    @ManyToOne(() => User, (user) => user.appointment)
    @JoinColumn ({ name: "user_id" })
    user!: User;
}