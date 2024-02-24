// import { ICategory } from "@/interfaces/ICategory";

// const API_URL = 'http://localhost:4000/api/';

// export const categoryAPI = {

//     async getCategory() {
//         const response = await fetch(`${API_URL}category`);
//         return response.json();
//     },

//     async getOneCategory(id_category: ICategory) {
//         const response = await fetch(`${API_URL}category/${id_category}`, { cache: 'no-store' })
//         return response.json();
//     },

//     async addCategory(name: { name: string }) {
//         const response = await fetch(`${API_URL}category/newcategory`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(name) // Отправка тела запроса
//         });
//         return response.json(); // Возвращение данных ответа
//     },

//     async updateCategory(category: ICategory) {
//         const response = await fetch(`${API_URL}category/${category.id_category}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(category) // Отправка тела запроса
//         });
//         return response.json(); // Возвращение данных ответа
//     },

//     async deleteCategory(id_category: { id_category: string }) {
//         const response = await fetch(`${API_URL}category/${id_category.id_category}`, {
//             method: 'DELETE'
//         });
//         return response.json(); // Возвращение данных ответа
//     }
    
// };

import { ICategory } from '@/interfaces/ICategory';
import { PrismaClient, Category } from '@prisma/client';

const prisma = new PrismaClient();

export const categoryAPI = {
    async getCategory() {
        return prisma.category.findMany();
    },

    async getOneCategory(id_category: number) {
        return prisma.category.findUnique({
            where: {
                id_category
            }
        });
    },

    async addCategory(name: string) {
        return prisma.category.create({
            data: {
                name
            }
        });
    },

    async updateCategory(id_category: number, category: Partial<ICategory>) {
        try {
            const updatedCategory = await prisma.category.update({
                where: {
                    id_category
                },
                data: {
                    name: category.name,
                },
            });
    
            return updatedCategory;
        } catch (error) {
            // Обработка ошибок
            console.error('Ошибка при обновлении статьи:', error);
            throw error; // Если нужно передать ошибку дальше для обработки на уровне вызывающего кода
        }
    },    

    async deleteCategory(id_category: number) {
        return prisma.category.delete({
            where: {
                id_category
            }
        });
    }
};
