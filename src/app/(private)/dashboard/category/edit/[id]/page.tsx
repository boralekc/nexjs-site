
import EditCategory from "@/features/category/EditCategory";
import { categoryAPI } from "@/shared/api/services/CategoryServices";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Edit category',
    description: '',
  }

interface ItemCategoryProps {
    params: {
        id: number;
    }
}

export default async function CategoryItemPage ({ params: { id } }: ItemCategoryProps) {
    const categoryId = Number(id);
    const category = await categoryAPI.getOneCategory(categoryId)

    if (!category) {
        // Обработка случая, когда статья не найдена
        return <div>Категория не найдена</div>;
    }

    return (
        <EditCategory category={category} />
    )
}
