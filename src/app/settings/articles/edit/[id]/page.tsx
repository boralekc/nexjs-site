import { articleAPI } from "@/app/api/services/ArticleServices";
import { categoryAPI } from "@/app/api/services/CategoryServices";
import SelectedEditArticle from "@/app/ui/Article/Selected/SelectedEditArticle";
import { IArticle } from "@/interfaces/IArticle";
import SettingsLayout from "@/layouts/SettingsLayout"
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
        <html lang='en'>
            <body>
                <SettingsLayout>
                    <SelectedEditArticle oneArticle={oneArticle} categories={categories}/>
                </SettingsLayout>
            </body>
        </html>
    )
}
