"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const email_routes_1 = require("./email.routes");
class Routes {
    static define(router) {
        router.use('/email', email_routes_1.emailRouter);
        return router;
    }
}
exports.default = Routes.define((0, express_1.Router)());
