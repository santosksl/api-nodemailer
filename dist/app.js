"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetupApplication = void 0;
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
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
        const corsOptions = {
            origin: '*',
            optionsSuccessStatus: 200,
        };
        this.app.use(express_1.default.json());
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
        this.app.use((0, cors_1.default)(corsOptions));
    }
    startApplication() {
        this.server = this.app.listen(this.port, () => {
            console.log(`Servidor rodando na porta ${this.port}`);
        });
    }
}
exports.SetupApplication = SetupApplication;
