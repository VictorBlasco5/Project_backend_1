
import { appointmentSeedDatabase } from "./appointmentSeeder";
import { roleSeedDatabase } from "./roleSeeder";
import { serviceSeedDatabase } from "./serviceSeeder";
import { userSeedDatabase } from "./userSeeder";


const launchSeeder = async () => {
    await roleSeedDatabase();
    await userSeedDatabase();
    await appointmentSeedDatabase();
    await serviceSeedDatabase();

}

launchSeeder();