import "reflect-metadata"
import "dotenv/config"
import { DataSource } from "typeorm"
import { Roles1709154719810 } from "./migrations/1709154719810-roles"
import { Services1709154811515 } from "./migrations/1709154811515-services"
import { Users1709154886265 } from "./migrations/1709154886265-users"
import { Appointments1709154900402 } from "./migrations/1709154900402-appointments"
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
database: "victor",
entities: [
    Role,
    User,
    Service,
    Appointment
],
migrations: [
    Roles1709154719810,
    Services1709154811515,
    Users1709154886265,
    Appointments1709154900402
],
synchronize: false,
logging: false,
})