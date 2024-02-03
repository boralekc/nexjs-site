import { articleAPI } from "@/app/lib/services/ArticleServices";
import { categoryAPI } from "@/app/lib/services/CategoryServices";
import ItemArticle from "@/app/ui/Article/ItemArticle";
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
    const article = await articleAPI.getOneArticle(id)
    const categories = await categoryAPI.getCategory()

    return (
        <html lang='en'>
            <body>
                <SettingsLayout>
                    <ItemArticle article={article} categories={categories}/>
                </SettingsLayout>
            </body>
        </html>
    )
}
