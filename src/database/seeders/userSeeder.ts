import { User } from "../../models/User";
import { AppDataSource } from "../db";

const roleSeedDatabase = async () => {
    try {
      await AppDataSource.initialize();
      
      const user1 = User.create({
        first_name: "Laura",
        last_name: "Blasco",
        email: "laura@blasco.com",
        password_hash: "$2b$08$apv5HSaTAJEJ.iswX9se0.SW0NHBpc.S6tH.Sx8HyPEaApSQxl9kS",
        role: {id: 3}
      });
      await user1.save();

      const user2 = User.create({
        first_name: "Víctor",
        last_name: "Blasco",
        email: "victor@blasco.com",
        password_hash: "$2b$08$apv5HSaTAJEJ.iswX9se0.SW0NHBpc.S6tH.Sx8HyPEaApSQxl9kS",
        role: {id: 2}
      });
      await user2.save();

      const user3 = User.create({
        first_name: "Miguel Ángel",
        last_name: "Blasco",
        email: "miguelangel@blasco.com",
        password_hash: "$2b$08$apv5HSaTAJEJ.iswX9se0.SW0NHBpc.S6tH.Sx8HyPEaApSQxl9kS",
        role: {id: 1}
      });
      await user3.save();

      const user4 = User.create({
        first_name: "Lina",
        last_name: "Pérez",
        email: "lina@perez.com",
        password_hash: "$2b$08$apv5HSaTAJEJ.iswX9se0.SW0NHBpc.S6tH.Sx8HyPEaApSQxl9kS",
        role: {id: 1}
      });
      await user4.save();

      const user5 = User.create({
        first_name: "Iván",
        last_name: "Esparza",
        email: "ivan@esparza.com",
        password_hash: "$2b$08$apv5HSaTAJEJ.iswX9se0.SW0NHBpc.S6tH.Sx8HyPEaApSQxl9kS",
        role: {id: 1}
      });
      await user5.save();

      const user6 = User.create({
        first_name: "Alex",
        last_name: "García",
        email: "alex@garcia.com",
        password_hash: "$2b$08$apv5HSaTAJEJ.iswX9se0.SW0NHBpc.S6tH.Sx8HyPEaApSQxl9kS",
        role: {id: 1}
      });
      await user6.save();

      const user7 = User.create({
        first_name: "Conrado",
        last_name: "Casany",
        email: "conrado@casany.com",
        password_hash: "$2b$08$apv5HSaTAJEJ.iswX9se0.SW0NHBpc.S6tH.Sx8HyPEaApSQxl9kS",
        role: {id: 1}
      });
      await user7.save();

      const user8 = User.create({
        first_name: "Carles",
        last_name: "Clemenre",
        email: "carles@clemente.com",
        password_hash: "$2b$08$apv5HSaTAJEJ.iswX9se0.SW0NHBpc.S6tH.Sx8HyPEaApSQxl9kS",
        role: {id: 1}
      });
      await user8.save();

      const user9 = User.create({
        first_name: "Guillermo",
        last_name: "Bernat",
        email: "guillermo@bernat.com",
        password_hash: "$2b$08$apv5HSaTAJEJ.iswX9se0.SW0NHBpc.S6tH.Sx8HyPEaApSQxl9kS",
        role: {id: 1}
      });
      await user9.save();

      const user10 = User.create({
        first_name: "Eloy",
        last_name: "Díaz",
        email: "eloy@diaz.com",
        password_hash: "$2b$08$apv5HSaTAJEJ.iswX9se0.SW0NHBpc.S6tH.Sx8HyPEaApSQxl9kS",
        role: {id: 1}
      });
      await user10.save();
  

      
      console.log('---------------------------');
      console.log('Users successfully saved');    
      console.log('---------------------------');    
    } catch (error) {
      console.log(error);
    } finally {
      await AppDataSource.destroy()
    }
  }
   
  roleSeedDatabase();