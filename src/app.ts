import express from "express";
import { Server } from "http"
import router from "./routes";

export class SetupApplication {
    private server?: Server;

    constructor (private port: number, public app = express()) {}

    public initApplication() {
        this.setupExpress();
        this.setupRoutes();
    }

    private setupRoutes() {
        this.app.use(router);
    }

    private setupExpress() {
        this.app.use(express.json());
    }

    public startApplication() {
        this.server = this.app.listen(this.port, () => {
            console.log(`Servidor rodando na porta ${this.port}`);
        });
    }
}