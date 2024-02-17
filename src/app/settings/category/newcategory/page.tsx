import { categoryAPI } from "@/app/api/services/CategoryServices"
import NewCategoryForm from "@/app/ui/Category/NewCategory"
import { IAddCategory, ICategory } from "@/interfaces/ICategory"
import SettingsLayout from "@/layouts/SettingsLayout"
import { Metadata } from "next"
import { revalidatePath } from "next/cache"
import Link from "next/link"

export const metadata: Metadata = {
    title: 'Category | New Category',
    description: '',
}

const NewCategoryPage = () => {

    return (
        <html lang='en'>
            <body>
                <SettingsLayout>
                        <NewCategoryForm />
                </SettingsLayout>
            </body>
        </html>
    )
}

export default NewCategoryPage