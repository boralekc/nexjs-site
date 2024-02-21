'use server'

import { usersAPI } from "@/app/api/services/UserServices";
import { IUser } from "@/interfaces/IUser";
import { revalidatePath } from "next/cache";


export const createUser = async (formData: FormData) => {
    try {
        const username = formData.get('username') as string
        const email = formData.get('email') as string
        const password = formData.get('password') as string
        const saveUser = await usersAPI.addUser({ username, email, password });
        console.log(saveUser)
    } catch (error) {

    }
    revalidatePath('/settings/users')
}

export async function deleteUser(formData: FormData) {
    try {
        const user_id = Number(formData.get('user_id')); // Извлекаем идентификатор категории из formData
        const deleteUser = await usersAPI.deleteUser( user_id ); // Отправляем запрос на удаление категории
        console.log(deleteUser)
        
    } catch (error) {
        // Обработка ошибок при удалении категории
    }
    revalidatePath('/settings/users')
}

export const updateUser = async (formData: FormData) => {
    try {
        const user_id = Number(formData.get('user_id'));
        const username = formData.get('username') as string
        const email = formData.get('email') as string
        const password = formData.get('password') as string

        const users: Partial<IUser> = {
            username,
            email,
            password
        };

        const updateUser = await usersAPI.updateUser(user_id, users);
        console.log(updateUser)
    } catch (error) {

    }
    revalidatePath('/settings/users')
}