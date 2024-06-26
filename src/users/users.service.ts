import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

export type User = any;

@Injectable()
export class UsersService {
     constructor(private prisma: PrismaService) {}
     
    //     private readonly users = [
    //         {
    //             userId: 1,
    //             username: 'Timur',
    //             password: '123'
    //         },
    //         {
    //             userId: 2,
    //             username: 'Timur',
    //             password: '123'
    //         }
    //     ];
    
    // async findOne(username: string): Promise<User | undefined>{
    //     return this.users.find(user => user.username === username)
    // }

    async findOne(username: string): Promise<User | null> {
        
        try {
            const user = await this.prisma.user.findFirst({
                where: {
                    username: {
                        equals: username,
                    },
                },
            });
            return user;
        } catch (error) {
            console.error('Error finding user:', error);
            return null;
        }
    }
}
