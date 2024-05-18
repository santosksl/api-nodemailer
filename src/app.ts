import express, { NextFunction, Request, Response } from "express";
import { Server } from "http"
import router from "./routes";
import bodyParser from "body-parser";
import cors from "cors";

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
        const corsOptions = {
            origin: '*',
            optionsSuccessStatus: 200,
        }

        this.app.use(express.json());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }))
        this.app.use(cors(corsOptions));
    }

    public startApplication() {
        this.server = this.app.listen(this.port, () => {
            console.log(`Servidor rodando na porta ${this.port}`);
        });
    }
}