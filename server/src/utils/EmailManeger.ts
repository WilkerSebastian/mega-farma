import { createTransport } from "nodemailer"

export default class EmailManeger {

    private static transporter = createTransport({        
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS
        }
    })

    public static sendValidationEmail(url:string , user:{name:string,email:string}) {

        const { name, email } = user

        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: `Confirmação de registro MEGA FARMA`,
            text: `Olá ${name}, para finalizar seu cadastro no site da MEGA FARM acessae esse link para ativar sua conta. ${url}`
        };

        this.transporter.sendMail(mailOptions)

    }

}