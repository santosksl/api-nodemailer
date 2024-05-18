"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class Server {
    static startServer() {
        const application = new app_1.SetupApplication(process.env.PORT || 3030);
        application.initApplication();
        application.startApplication();
    }
}
Server.startServer();
