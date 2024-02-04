'use server'

import { usersAPI } from "@/app/lib/services/UserServices";
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
        const user_id = formData.get('user_id') as string; // Извлекаем идентификатор категории из formData
        const deleteUser = await usersAPI.deleteUser({ user_id }); // Отправляем запрос на удаление категории
        console.log(deleteUser)
        
    } catch (error) {
        // Обработка ошибок при удалении категории
    }
    revalidatePath('/settings/users')
}

export const updateUser = async (formData: FormData) => {
    try {
        const user_id = formData.get('user_id') as string
        const username = formData.get('username') as string
        const email = formData.get('email') as string
        const password = formData.get('password') as string
        const updateUser = await usersAPI.updateUser({ user_id, username, email, password });
        console.log(updateUser)
    } catch (error) {

    }
    revalidatePath('/settings/users')
}