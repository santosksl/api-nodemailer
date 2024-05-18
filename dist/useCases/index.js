"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmailController = void 0;
const SendEmailController_1 = require("./SendEmailController");
const SendEmailUseCase_1 = require("./SendEmailUseCase");
const sendEmailUseCase = new SendEmailUseCase_1.SendEmailUseCase();
const sendEmailController = new SendEmailController_1.SendEmailController(sendEmailUseCase);
exports.sendEmailController = sendEmailController;
