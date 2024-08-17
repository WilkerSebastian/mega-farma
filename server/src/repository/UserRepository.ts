import { LessThan } from "typeorm/find-options/operator/LessThan";
import { AppDataSource } from "../database/config/data-source"
import { User } from '../model/User';

export const UserRepository = AppDataSource.getRepository(User).extend({

    async findById(id: string): Promise<User | null> {
        return this.findOne({ where: { id } });
    },

    async findByEmail(email: string): Promise<User | null> {
        return this.findOne({ where: { email } });
    },

    async fundExpirationUsers(expirationTime: Date): Promise<User[]> {
        
        return this.find({ where: { 

            isValidated: false, 
            createdAt: LessThan(expirationTime)

        }});

    },

    async createUser(userData: Partial<User>): Promise<User> {
        const user = this.create(userData);
        return this.save(user);
    },

});
