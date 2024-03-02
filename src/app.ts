import express from "express";
import { login, register } from "./controllers/authController";
import { createServices, deleteServices, getServices, updateServices } from "./controllers/serviceController";
import { getUserById, getUsers, updateProfile } from "./controllers/userController";
import { auth } from "./middlewares/auth";
import { isSuperAdmin } from "./middlewares/isSuperAdmin";

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
app.post('/api/services', createServices)
app.put('/api/services/:id', updateServices)
app.delete('/api/services/:id', deleteServices)


//user routes
app.get('/api/users',auth, isSuperAdmin, getUsers)
app.get('/api/users/profile/:id', getUserById)
app.put('/api/users/profile',auth, updateProfile)