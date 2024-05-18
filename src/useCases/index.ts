import { SendEmailController } from "./SendEmailController";
import { SendEmailUseCase } from "./SendEmailUseCase";

const sendEmailUseCase = new SendEmailUseCase()
const sendEmailController = new SendEmailController(sendEmailUseCase)

export { sendEmailController }