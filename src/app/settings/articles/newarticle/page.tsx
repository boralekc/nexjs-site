import { categoryAPI } from "@/app/lib/services/CategoryServices";
import SelectedNewArticle from "@/app/ui/Article/Selected/SelectedNewArticle";
import SettingsLayout from "@/layouts/SettingsLayout"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Articles | New Article',
    description: '',
  }

export default async function NewArticlePage () {
    const categories = await categoryAPI.getCategory();

    return (
        <html lang='en'>
            <body>
                <SettingsLayout>
                    <SelectedNewArticle categories={categories}/>
                </SettingsLayout>
            </body>
        </html>
    )
}