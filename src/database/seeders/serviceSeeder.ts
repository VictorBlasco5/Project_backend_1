import { Service } from "../../models/Service";
import { AppDataSource } from "../db";

export const serviceSeedDatabase = async () => {
    try {
      await AppDataSource.initialize();
  
      const service1 = new Service();
      service1.service_name = "Personalized tattoo",
      service1.description = "Customers will have the freedom to select unique motifs and designs, fully customizing their tattoo experience according to their preferences and tastes."
      await service1.save();
  
      const service2 = new Service();
      service2.service_name = "Tattoos from the catalog",
      service2.description = "We offer tattooing based on predefined designs in our catalog. Customers can choose from a variety of stylized and tested options."
      await service2.save();

      const service3 = new Service();
      service3.service_name = "Restoration and rejuvenation work",
      service3.description = "We specialize in the restoration and rejuvenation of existing tattoos. Our experts work to enhance and renew old tattoos, giving them back their vitality."
      await service3.save();

      const service4 = new Service();
      service4.service_name = "Placement of piercings and dilators",
      service4.description = "We offer professional services for piercing and dilator placement. Our team guarantees safe procedures and varied styles to meet the individual preferences of our clients. Our clients' preferences."
      await service4.save();

      const service5 = new Service();
      service5.service_name = "Sales of piercings and other items",
      service5.description = "In addition to our application services, we offer a selection of piercings and other body art related items. Customers can purchase quality products to complement complement their unique style."
      await service5.save();
  
      console.log('---------------------------');
      console.log('Services successfully saved');    
      console.log('---------------------------');    
    } catch (error) {
      console.log(error);
    } finally {
      await AppDataSource.destroy()
    }
  }

  serviceSeedDatabase();