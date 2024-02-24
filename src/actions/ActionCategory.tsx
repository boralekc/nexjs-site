'use server'
import { ICategory } from "@/entities/category/model/ICategory";
import { categoryAPI } from "@/shared/api/services/CategoryServices";
import { revalidatePath } from "next/cache";


export const createCategory = async (formData: FormData) => {
    try {
        const name = formData.get('name') as string
        const saveCategory = await categoryAPI.addCategory(name );
        console.log(saveCategory)
    } catch (error) {

    }
    revalidatePath('/settings/category')
}

export async function deleteCategory(formData: FormData) {
    try {
        const id_category = Number(formData.get('id_category')); // Извлекаем идентификатор категории из formData
        const deleteCategory = await categoryAPI.deleteCategory( id_category ); // Отправляем запрос на удаление категории
        console.log(deleteCategory)
        
    } catch (error) {
        // Обработка ошибок при удалении категории
    }
    revalidatePath('/settings/category')
}

export const updateCategory = async (formData: FormData) => {
    try {
        const id_category = Number(formData.get('id_category'));
        const name = formData.get('name') as string;

        const category: Partial<ICategory> = {
            name
        };

        const updateCategory = await categoryAPI.updateCategory(id_category, category);
        console.log(updateCategory)
    } catch (error) {

    }
    revalidatePath('/settings/category')
}