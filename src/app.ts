import express from "express";
import { Server } from "http"
import router from "./routes";
import bodyParser from "body-parser";

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
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }))
    }

    public startApplication() {
        this.server = this.app.listen(this.port, () => {
            console.log(`Servidor rodando na porta ${this.port}`);
        });
    }
}