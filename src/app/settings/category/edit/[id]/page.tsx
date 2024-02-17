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
        id: ICategory;
    }
}

export default async function CategoryItemPage ({ params: { id } }: ItemCategoryProps) {
    const category = await categoryAPI.getOneCategory(id)
    

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
