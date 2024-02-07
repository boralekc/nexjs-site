'use server'

import { articleAPI } from "@/app/lib/services/ArticleServices";
import { revalidatePath } from "next/cache";


export const createArticle = async (formData: FormData) => {
    try {
        const title = formData.get('title') as string
        const content = formData.get('content') as string
        const id_category = formData.get('id_category') as string
        const saveArticle = await articleAPI.addArticle({ title, content, id_category });
        console.log(saveArticle)
    } catch (error) {

    }
    revalidatePath('/settings/articles')
}

export async function deleteArticle(formData: FormData) {
    try {
        const id_article = formData.get('id_article') as string; // Извлекаем идентификатор категории из formData
        const deleteArticle = await articleAPI.deleteArticle({ id_article }); // Отправляем запрос на удаление категории
        console.log(deleteArticle)
        
    } catch (error) {
        // Обработка ошибок при удалении категории
    }
    revalidatePath('/settings/articles')
}

export const updateArticle = async (formData: FormData) => {
    try {
        const id_article = formData.get('id_article') as string
        const name = formData.get('name') as string
        const updateArticle = await articleAPI.updateArticle({ id_category, title, content });
        console.log(updateArticle)
    } catch (error) {

    }
    revalidatePath('/settings/articles')
}