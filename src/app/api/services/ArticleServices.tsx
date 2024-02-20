import { IArticle } from '@/interfaces/IArticle'; // Убедитесь, что вы импортировали fetch

const API_URL = 'http://localhost:4000/api/';

export const articleAPI = {

    async getArticles() {
        const response = await fetch(`${API_URL}articles`);
        return response.json();
    },

    async getOneArticle(id_article: IArticle) {
        const response = await fetch(`${API_URL}articles/${id_article}`, { cache: 'no-store' })
        return response.json();
    },

    async addArticle(articles: IArticle) {
        const response = await fetch(`${API_URL}articles/newarticle`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(articles) // Отправка тела запроса
        });
        return response.json(); // Возвращение данных ответа
    },

    async updateArticle(articles: IArticle) {
        const response = await fetch(`${API_URL}articles/${articles.id_article}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(articles) // Отправка тела запроса
        });
        return response.json(); // Возвращение данных ответа
    },

    async deleteArticle(id_article: { id_article: number }) {
        const response = await fetch(`${API_URL}articles/${id_article.id_article}`, {
            method: 'DELETE'
        });
        return response.json(); // Возвращение данных ответа
    }
};

