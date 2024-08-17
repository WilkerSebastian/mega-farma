import { User } from '../model/User';
import { UserRepository } from '../repository/UserRepository';
import bcrypt from 'bcryptjs';

export class UserService {

    private userRepository = UserRepository;

    async createUser(userData: Partial<User>): Promise<User> {

        this.validatorUser(userData);

        const salt = await bcrypt.genSalt(10);

        if (userData.senha)
            userData.senha = await bcrypt.hash(userData.senha, salt);

        return this.userRepository.createUser(userData);
    }

    async validateUser(userId: string): Promise<void> {

        const user = await this.userRepository.findById(userId);

        if (user) {
          
            user.isValidated = true;
          await this.userRepository.save(user);

        } else
            throw new Error("Tentantiva de validação de usuário inexistente");

    }

    public async removeAllExpiredUsers(): Promise<void> {
        
        const expirationTime = new Date();

        expirationTime.setHours(expirationTime.getHours() - Number(process.env.HOUR) || 1); 

        const users = await this.userRepository.fundExpirationUsers(expirationTime);



        if (users.length > 0) {

            await this.userRepository.remove(users);

        }

    }

    private validatorUser(userData: Partial<User>): void {
        
        if (
            !userData.nome ||
            !userData.email ||
            !userData.cpf ||
            !userData.bairro ||
            !userData.rua ||
            !userData.telefone ||
            !userData.dataNascimento ||
            !userData.senha
        )
            throw new Error("Todos os campos devem ser preenchidos.");

        if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$|^\d{11}$/.test(userData.cpf))
            throw new Error(`CPF ${userData.cpf} é inválido`);

        if (!/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/.test(userData.telefone))
            throw new Error(`Telefone ${userData.telefone} é inválido.`);

        if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(userData.email))
            throw new Error(`Email ${userData.email} é inválido.`);
            

    }

}
