'use server'

import { usersAPI } from "@/app/lib/services/UserServices";
import { revalidatePath } from "next/cache";


export const createUser = async (formData: FormData) => {
    try {
        const username = formData.get('name') as string
        const saveCategory = await usersAPI.addUser({ username });
        console.log(saveCategory)
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