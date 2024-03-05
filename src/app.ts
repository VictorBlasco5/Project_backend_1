import express from "express";
import { login, register } from "./controllers/authController";
import { createServices, deleteServices, getServices, updateServices } from "./controllers/serviceController";
import { deleteUsers, getUserProfile, getUsers, updateProfile } from "./controllers/userController";
import { auth } from "./middlewares/auth";
import { isSuperAdmin } from "./middlewares/isSuperAdmin";
import { createAppointments, getAppointments, getAppointmentsById, updateAppointments } from "./controllers/appointmentController";

export const app = express();

app.use(express.json());

app.get('/healthy', (req, res) => {
    res.status(200).json(
      {
        success: true,
        message: "Server is healthy"
      }
    );
})

//auth routes
app.post('/api/auth/register', register)
app.post('/api/auth/login', login)


//service routes
app.get('/api/services', getServices)
app.post('/api/services',auth, isSuperAdmin, createServices)
app.put('/api/services/:id',auth, isSuperAdmin, updateServices)
app.delete('/api/services/:id',auth, isSuperAdmin, deleteServices)

//user routes
app.get('/api/users',auth, isSuperAdmin, getUsers)
app.get('/api/users/profile',auth, getUserProfile)
app.put('/api/users/profile',auth, updateProfile)
app.delete('/api/users/:id',auth, isSuperAdmin, deleteUsers)

//appointments routes
app.post('/api/appointments',auth, createAppointments)
app.put('/api/appointments', auth, updateAppointments)
app.get('/api/appointments/:id', getAppointmentsById)
app.get('/api/appointments', auth, getAppointments)