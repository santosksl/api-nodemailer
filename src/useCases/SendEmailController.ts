import { Request, Response } from "express";
import { SendEmailUseCase } from "./SendEmailUseCase";

class SendEmailController {
    constructor (
        private sendEmailUseCase: SendEmailUseCase
    ) {}

    handle (request: Request, response: Response): Response {
        const { email, content, name } = request.body;
        this.sendEmailUseCase.execute({ email, content, name });
        return response.status(201).json({ sucess: "E-mail enviado com sucesso" });
    }  
}

export { SendEmailController }