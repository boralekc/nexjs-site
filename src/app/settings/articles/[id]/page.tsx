import { articleAPI } from "@/app/api/services/ArticleServices";
import { categoryAPI } from "@/app/api/services/CategoryServices";
import ItemArticle from "@/app/ui/Article/ItemArticle";
import SelectedArticle from "@/app/ui/Article/Selected/SelectedArticle";
import { IArticle } from "@/interfaces/IArticle";
import SettingsLayout from "@/layouts/SettingsLayout"
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
    const articleId = Number(id)
    const article = await articleAPI.getOneArticle(articleId)
    const categories = await categoryAPI.getCategory()
    const articles = await articleAPI.getArticles()

    if(!articles) {
        return "Статья не найдена"
    }

    return (
        <html lang='en'>
            <body>
                <SettingsLayout>
                    <SelectedArticle articles={articles} categories={categories}/>
                </SettingsLayout>
            </body>
        </html>
    )
}
