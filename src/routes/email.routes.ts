import { Request, Response, Router } from "express";
import { sendEmailController } from "../useCases";

const emailRouter = Router();

emailRouter.post('/send', (request: Request, response: Response) => {
    return sendEmailController.handle(request, response);
})

export { emailRouter }