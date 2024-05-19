import nodemailer from "nodemailer";

interface IRequest {
    name: string,
    email: string,
    content: string
}

class SendEmailUseCase {
    constructor() {}

    execute({ email, content, name }: IRequest) {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.GOOGLE_APP_PASS,
            },
            tls: {
              rejectUnauthorized: false,
            }
        })

        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: "NodeJS - NodeMailer (My Portfolio)",
            text: `Email: ${email}` + '\n' + `Nome: ${name}` + '\n' + `Mensagem: ${content}`,
        }

        transporter.sendMail(mailOptions, (err) => {
            if (err) {
                console.log(err);
                throw new Error("Houve um erro ao enviar o e-mail");
            } else {
                console.log("E-mail enviado com sucesso!");
                console.log(mailOptions.from)
            }
        });
    }
}

export { SendEmailUseCase }