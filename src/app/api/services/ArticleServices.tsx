// import { IArticle } from '@/interfaces/IArticle'; // Убедитесь, что вы импортировали fetch

// const API_URL = 'http://localhost:4000/api/';

// export const articleAPI = {

//     async getArticles() {
//         const response = await fetch(`${API_URL}articles`);
//         return response.json();
//     },

//     async getOneArticle(id_article: IArticle) {
//         const response = await fetch(`${API_URL}articles/${id_article}`, { cache: 'no-store' })
//         return response.json();
//     },

//     async addArticle(articles: IArticle) {
//         const response = await fetch(`${API_URL}articles/newarticle`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(articles) // Отправка тела запроса
//         });
//         return response.json(); // Возвращение данных ответа
//     },

//     async updateArticle(articles: IArticle) {
//         const response = await fetch(`${API_URL}articles/${articles.id_article}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(articles) // Отправка тела запроса
//         });
//         return response.json(); // Возвращение данных ответа
//     },

//     async deleteArticle(id_article: { id_article: number }) {
//         const response = await fetch(`${API_URL}articles/${id_article.id_article}`, {
//             method: 'DELETE'
//         });
//         return response.json(); // Возвращение данных ответа
//     }
// };
import { IArticle } from '@/interfaces/IArticle';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const articleAPI = {
    async getArticles() {
        return prisma.article.findMany();
    },

    async getOneArticle(id_article: number) {
        return prisma.article.findUnique({
            where: {
                id_article
            }
        });
    },

    async addArticle(articleData: Partial<IArticle>) {
        if (articleData.title === undefined || articleData.content === undefined) {
            throw new Error('Title and content must be provided');
        }
    
        return prisma.article.create({
            data: {
                title: articleData.title,
                content: articleData.content,
                id_category: articleData.id_category || null
            },
        });
    },

    async fetchArticle(id_article: number, articleData: Partial<IArticle>) {
        try {
            const updatedArticle = await prisma.article.update({
                where: {
                    id_article
                },
                data: {
                    title: articleData.title,
                    content: articleData.content,
                    id_category: articleData.id_category || null
                },
            });
    
            return updatedArticle;
        } catch (error) {
            // Обработка ошибок
            console.error('Ошибка при обновлении статьи:', error);
            throw error; // Если нужно передать ошибку дальше для обработки на уровне вызывающего кода
        }
    },    

    async deleteArticle(id_article: number) {
        return prisma.article.delete({
            where: {
                id_article
            }
        });
    }
};

