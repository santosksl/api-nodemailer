import { Request, Response, Router } from "express";
import { sendEmailController } from "../useCases";

const emailRouter = Router();

emailRouter.post('/send', (request: Request, response: Response) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
    return sendEmailController.handle(request, response);
})

export { emailRouter }