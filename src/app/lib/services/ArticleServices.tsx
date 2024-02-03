import { IArticle } from '@/interfaces/IArticle'; // Убедитесь, что вы импортировали fetch

const API_URL = 'http://localhost:7000/api/';

export const articleAPI = {

    async getArticles() {
        const response = await fetch(`${API_URL}articles`, {
            next: { revalidate: 5 }
        });
        return response.json();
    },

    async getOneArticle(id_article: IArticle) {
        const response = await fetch(`${API_URL}articles/${id_article}`)
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
    // async deleteArticle( article ) {
    //     const response = await fetch(`articles/${article.id_article}`, {
    //         method: 'DELETE',
    //     });
    //     return response.json(); // Возвращение данных ответа
    // },
    // async updateArticle( article ) {
    //     const response = await fetch(`articles/${article.id_article}`, {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify( article ) // Отправка тела запроса
    //     });
    //     return response.json(); // Возвращение данных ответа
    // },
};

