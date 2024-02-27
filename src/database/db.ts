import "reflect-metadata"
import "dotenv/config"
import { DataSource } from "typeorm"
import { Roles1708977443781 } from "./migrations/1708977443781-roles"
import { User1708978297760 } from "./migrations/1708978297760-user"
import { Services1708978774615 } from "./migrations/1708978774615-services"
import { Appointments1708978652020 } from "./migrations/1709022138191-appointments"
import { Role } from "../models/Role"
import { User } from "../models/User"
import { Service } from "../models/Service"
import { Appointment } from "../models/Appointment"

export const AppDataSource = new DataSource({
type: "mysql",
host: "localhost",
port: 3307,
username: "root",
password: "1234",
database: "Proyect-backend-1",
entities: [Role, User, Service, Appointment],
migrations: [
    Roles1708977443781,
    User1708978297760,
    Services1708978774615,
    Appointments1708978652020
],
synchronize: false,
logging: false,
})