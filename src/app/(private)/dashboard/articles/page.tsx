import { articleAPI } from '@/app/api/services/ArticleServices';
import { categoryAPI } from '@/app/api/services/CategoryServices';
import { Metadata } from 'next';
import SelectedArticle from '@/app/ui/Article/Selected/SelectedArticle';

export const metadata: Metadata = {
  title: 'Articles',
  description: '',
}

export default async function ArticlePage() {
  const articles = await articleAPI.getArticles();
  const categories = await categoryAPI.getCategory();
   
  return (
    <html lang='en'>
      <body>
          <SelectedArticle categories={categories} articles={articles} />
      </body>
    </html>
  );
}

