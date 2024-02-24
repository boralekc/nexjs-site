import { IUser } from '@/interfaces/IUser'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const usersAPI = {
    async getUsers() {
        return prisma.user.findMany();
    },

    async getOneUser(user_id: number) {
        return prisma.user.findUnique({
            where: {
                user_id
            }
        });
    },

    async addUser(users: Partial<IUser>) {
        if (users.username === undefined || users.email === undefined || users.password === undefined ) {
            throw new Error('Username, email and password must be provided');
        }
    
        return prisma.user.create({
            data: {
                username: users.username,
                email: users.email,
                password: users.password
            },
        });
    },

    async updateUser(user_id: number, users: Partial<IUser>) {
        try {
            const updatedUser = await prisma.user.update({
                where: {
                    user_id
                },
                data: {
                    username: users.username,
                    email: users.email,
                    password: users.password
                },
            });
    
            return updatedUser;
        } catch (error) {
            // Обработка ошибок
            console.error('Ошибка при обновлении статьи:', error);
            throw error; // Если нужно передать ошибку дальше для обработки на уровне вызывающего кода
        }
    },  

    async deleteUser(user_id: number) {
        return prisma.user.delete({
            where: {
                user_id
            }
        });
    }
};