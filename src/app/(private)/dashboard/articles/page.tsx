import SelectedArticle from '@/features/selected/SelectedArticle';
import { articleAPI } from '@/shared/api/services/ArticleServices';
import { categoryAPI } from '@/shared/api/services/CategoryServices';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Articles',
  description: '',
}

export default async function ArticlePage() {
  const articles = await articleAPI.getArticles();
  const categories = await categoryAPI.getCategory();
   
  return (
      <SelectedArticle categories={categories} articles={articles} />
  );
}

