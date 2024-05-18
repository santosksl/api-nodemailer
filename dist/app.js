"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetupApplication = void 0;
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
class SetupApplication {
    constructor(port, app = (0, express_1.default)()) {
        this.port = port;
        this.app = app;
    }
    initApplication() {
        this.setupExpress();
        this.setupRoutes();
    }
    setupRoutes() {
        this.app.use(routes_1.default);
    }
    setupExpress() {
        this.app.use(express_1.default.json());
    }
    startApplication() {
        this.server = this.app.listen(this.port, () => {
            console.log(`Servidor rodando na porta ${this.port}`);
        });
    }
}
exports.SetupApplication = SetupApplication;
