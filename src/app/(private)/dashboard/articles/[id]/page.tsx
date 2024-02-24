
import { IArticle } from "@/entities/article/model/IArticle";
import SelectedArticle from "@/features/selected/SelectedArticle";
import { articleAPI } from "@/shared/api/services/ArticleServices";
import { categoryAPI } from "@/shared/api/services/CategoryServices";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Edit article',
    description: '',
  }

interface ItemArticleProps {
    params: {
        id: IArticle;
    }
}

export default async function ArticleItemPage ({ params: { id } }: ItemArticleProps) {
    const categories = await categoryAPI.getCategory()
    const articles = await articleAPI.getArticles()

    if(!articles) {
        return "Статья не найдена"
    }

    return (
        <SelectedArticle articles={articles} categories={categories}/>
    )
}
