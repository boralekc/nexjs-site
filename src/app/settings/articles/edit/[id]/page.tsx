import { articleAPI } from "@/app/lib/services/ArticleServices";
import { categoryAPI } from "@/app/lib/services/CategoryServices";
import EditArticle from "@/app/ui/Article/EditArticle"
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

export default async function EditArticlePage ({ params: { id } }: ItemArticleProps) {
    const article = await articleAPI.getOneArticle(id)
    const categories = await categoryAPI.getCategory()

    return (
        <html lang='en'>
            <body>
                <SettingsLayout>
                    <EditArticle article={article} categories={categories}/>
                </SettingsLayout>
            </body>
        </html>
    )
}
