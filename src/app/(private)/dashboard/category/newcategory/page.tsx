import NewCategoryForm from "@/features/category/NewCategory"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Category | New Category',
    description: '',
}

const NewCategoryPage = () => {

    return (
        <NewCategoryForm />
    )
}

export default NewCategoryPage