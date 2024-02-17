import { ICategory } from "@/interfaces/ICategory";

const API_URL = 'http://localhost:4000/api/';

export const categoryAPI = {

    async getCategory() {
        const response = await fetch(`${API_URL}category`);
        return response.json();
    },

    async getOneCategory(id_category: ICategory) {
        const response = await fetch(`${API_URL}category/${id_category}`, { cache: 'no-store' })
        return response.json();
    },

    async addCategory(name: { name: string }) {
        const response = await fetch(`${API_URL}category/newcategory`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(name) // Отправка тела запроса
        });
        return response.json(); // Возвращение данных ответа
    },

    async updateCategory(category: ICategory) {
        const response = await fetch(`${API_URL}category/${category.id_category}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(category) // Отправка тела запроса
        });
        return response.json(); // Возвращение данных ответа
    },

    async deleteCategory(id_category: { id_category: string }) {
        const response = await fetch(`${API_URL}category/${id_category.id_category}`, {
            method: 'DELETE'
        });
        return response.json(); // Возвращение данных ответа
    }
    
};