"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailRouter = void 0;
const express_1 = require("express");
const useCases_1 = require("../useCases");
const emailRouter = (0, express_1.Router)();
exports.emailRouter = emailRouter;
emailRouter.post('/send', (request, response) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    return useCases_1.sendEmailController.handle(request, response);
});
