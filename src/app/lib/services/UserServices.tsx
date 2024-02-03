import next from "next";

const API_URL = 'http://localhost:7000/api/';

export const UsersAPI = {
    async getUsers() {
        const response = await fetch(`${API_URL}users`, {
        next: {
            revalidate: 10
        }
    });
        return response.json();
    }
};