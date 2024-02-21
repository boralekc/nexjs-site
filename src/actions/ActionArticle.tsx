'use server'

import { articleAPI } from "@/app/api/services/ArticleServices";
import { IArticle } from "@/interfaces/IArticle";
import { revalidatePath } from "next/cache";


export const createArticle = async (formData: FormData) => {
    try {
        const title = formData.get('title') as string
        const content = formData.get('content') as string
        const id_category = Number(formData.get('id_category'));
        const saveArticle = await articleAPI.addArticle({ title, content, id_category });
        console.log(saveArticle)
    } catch (error) {

    }
    revalidatePath('/settings/articles')
}

export async function deleteArticle(formData: FormData) {
    try {
        const id_article = Number(formData.get('id_article')); // Извлекаем идентификатор категории из formData
        const deleteArticle = await articleAPI.deleteArticle( id_article ); // Отправляем запрос на удаление категории
        console.log(deleteArticle)
        
    } catch (error) {
    }
    revalidatePath('/settings/articles')
}

export const updateArticle = async (formData: FormData) => {
    
    try {
        const id_article = Number(formData.get('id_article'));
        const id_category = Number(formData.get('id_category'));
        const title = formData.get('title') as string;
        const content = formData.get('content') as string;

        // Создание объекта articleData
        const articleData: Partial<IArticle> = {
            title,
            content,
            id_category
        };


        // Передача обоих аргументов в функцию updateArticleDB
        const updateArticleResult = await articleAPI.updateArticle(id_article, articleData);
        
        console.log(updateArticleResult);
    } catch (error) {
        // Обработка ошибок
    }
    revalidatePath('/settings/articles');
};
