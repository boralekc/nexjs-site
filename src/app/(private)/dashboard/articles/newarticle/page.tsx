import SelectedNewArticle from "@/features/selected/SelectedNewArticle";
import { categoryAPI } from "@/shared/api/services/CategoryServices";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Articles | New Article',
    description: '',
  }

export default async function NewArticlePage () {
    const categories = await categoryAPI.getCategory();

    return (
        <SelectedNewArticle categories={categories}/>
    )
}