import { Request, Response } from "express";
import { SendEmailUseCase } from "./SendEmailUseCase";

class SendEmailController {
    constructor (
        private sendEmailUseCase: SendEmailUseCase
    ) {}

    handle (request: Request, response: Response): Response {
        const { email, content } = request.body;
        this.sendEmailUseCase.execute({ email, content });
        return response.status(201).json({ sucess: "E-mail enviado com sucesso" });
    }  
}

export { SendEmailController }