import { Request, Response } from "express";
import { User } from "../model/User";
import { UserService } from "../service/UserService";
import AES from "../security/AES";
import EmailManeger from "../utils/EmailManeger";

export default class UserController {

    private static userService = new UserService()

    public static async createUser(req: Request, res: Response) {

        try {
            
            const request_user = req.body as Partial<User>

            const user = await this.userService.createUser(request_user);

            if (process.env.NODE_ENV === "development") 
                return res.status(201).json({ 
                    message: 'Usuário criado com sucesso!',
                    url: `${req.protocol}://${req.get('host')}/api/user/validate/${AES.encrypt(user.id)}`
                });

            EmailManeger.sendValidationEmail(`${req.protocol}://${req.get('host')}/api/user/validate/${AES.encrypt(user.id)}`, {name: user.nome, email: user.email});

            return res.redirect("/validate/user/message")


        } catch (e) {

            console.error(e);

            if (e instanceof Error)
                return res.status(500).json({ 
                    message: 'Erro interno do servidor ao criar usuário',
                    error: e.message
                });
        }

    }

    public static async validateUser(req: Request, res: Response) {
    
        try {
            
            const id = AES.decrypt(req.params.id);

            await this.userService.validateUser(id);

            if (process.env.NODE_ENV === "development") 
                return res.status(201).json({ 
                    message: 'Usuário validado com sucesso!',
                });

            return res.redirect("/")


        } catch (e) {

            console.error(e);

            if (e instanceof Error)
                return res.status(500).json({ 
                    message: 'Erro interno do servidor ao validar usuário',
                    error: e.message
                });
        }       
        
    }

}