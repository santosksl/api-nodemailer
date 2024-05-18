"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendEmailController = void 0;
class SendEmailController {
    constructor(sendEmailUseCase) {
        this.sendEmailUseCase = sendEmailUseCase;
    }
    handle(request, response) {
        const { email, content, name } = request.body;
        this.sendEmailUseCase.execute({ email, content, name });
        return response.status(201).json({ sucess: "E-mail enviado com sucesso" });
    }
}
exports.SendEmailController = SendEmailController;
