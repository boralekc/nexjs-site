import SelectedEditArticle from "@/features/selected/SelectedEditArticle";
import { articleAPI } from "@/shared/api/services/ArticleServices";
import { categoryAPI } from "@/shared/api/services/CategoryServices";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Edit article',
    description: '',
  }

interface ItemArticleProps {
    params: {
        id: number;
    }
}

export default async function EditArticlePage ({ params: { id } }: ItemArticleProps) {
    const articleId = Number(id);
    const oneArticle = await articleAPI.getOneArticle(articleId)
    const categories = await categoryAPI.getCategory()

    if (!oneArticle) {
        // Обработка случая, когда статья не найдена
        return <div>Статья не найдена</div>;
    }

    return (
        <SelectedEditArticle oneArticle={oneArticle} categories={categories}/>
    )
}
