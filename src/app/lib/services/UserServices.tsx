import { IUser } from '@/interfaces/IUser'

const API_URL = 'http://localhost:7000/api/';

export const usersAPI = {
    async getUsers() {
        const response = await fetch(`${API_URL}users`, {
        next: {
            revalidate: 10
        }
    });
        return response.json();
    },

    async getOneUser(user_id: IUser) {
        const response = await fetch(`${API_URL}users/${user_id}`)
        return response.json();
    },

    async addUser(users: IUser) {
        const response = await fetch(`${API_URL}users/newuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(users) // Отправка тела запроса
        });
        return response.json(); // Возвращение данных ответа
    },

    async deleteUser(user_id: { user_id: string }) {
        const response = await fetch(`${API_URL}users/${user_id.user_id}`, {
            method: 'DELETE'
        });
        return response.json(); // Возвращение данных ответа
    }
};