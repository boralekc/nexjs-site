import { categoryAPI } from "@/app/api/services/CategoryServices";
import EditCategory from "@/app/ui/Category/EditCategory";
import { ICategory } from "@/interfaces/ICategory";
import SettingsLayout from "@/layouts/SettingsLayout"
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
        <html lang='en'>
            <body>
                <SettingsLayout>
                    <EditCategory category={category} />
                </SettingsLayout>
            </body>
        </html>
    )
}
