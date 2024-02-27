import express, { Request, Response } from "express";
import "dotenv/config";

const app = express();

const PORT = process.env.PORT || 4001;

app.get('/healthy', (req, res) => {
    res.status(200).json(
      {
        success: true,
        message: "Server is healthy"
      }
    );
})
  

  
app.get('/',(req:Request,res:Response)=>{
    res.send('Hello world!')
});

app.listen(4000,()=>console.log('Servidor levantado en 4000'));


