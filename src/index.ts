import "dotenv/config";
import { app } from "./app";
import { AppDataSource } from "./database/db";


const PORT = process.env.PORT || 4001;

  
const startServer = () => { // función para llamar a que me ponga en marcha mi servidor
  AppDataSource.initialize()
      .then(() => {
          console.log('Database conected');
          app.listen(PORT, () => { // el listen pone en marcha mi servidor
              console.log(`Server is running on port: ${PORT}`);
          })
      })
      .catch(error => {
          console.log(error)
      })
}

startServer();

