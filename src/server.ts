import { SetupApplication } from "./app";
import dotenv from "dotenv";
dotenv.config();

class Server {
    static startServer() {
        const application = new SetupApplication(process.env.PORT || 3030);
        application.initApplication();
        application.startApplication();
    }
}

Server.startServer();