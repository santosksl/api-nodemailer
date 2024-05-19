"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendEmailUseCase = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
class SendEmailUseCase {
    constructor() { }
    execute({ email, content, name }) {
        const transporter = nodemailer_1.default.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.GOOGLE_APP_PASS,
            },
            tls: {
                rejectUnauthorized: false,
            }
        });
        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: "NodeJS - NodeMailer (My Portfolio)",
            text: `Email: ${email}` + '\n' + `Nome: ${name}` + '\n' + `Mensagem: ${content}`,
        };
        transporter.sendMail(mailOptions, (err) => {
            if (err) {
                console.log(err);
                throw new Error("Houve um erro ao enviar o e-mail");
            }
            else {
                console.log("E-mail enviado com sucesso!");
                console.log(mailOptions.from);
            }
        });
    }
}
exports.SendEmailUseCase = SendEmailUseCase;
