import Article from '@/app/ui/Article/Article';
import SettingsLayout from '@/layouts/SettingsLayout';
import { articleAPI } from '@/app/lib/services/ArticleServices';
import { categoryAPI } from '@/app/lib/services/CategoryServices';
import { IArticle } from '@/interfaces/IArticle';
import { ICategory } from '@/interfaces/ICategory';
import { revalidatePath } from 'next/cache';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Articles',
  description: '',
}

interface ArticleProps {
  selectedCategory: number | null;
  articles: IArticle[];
  categories: ICategory[];
}

export default async function ArticlePage() {
  const articles = await articleAPI.getArticles();
  const categories = await categoryAPI.getCategory();
  
   
  return (
    <html lang='en'>
      <body>
        <SettingsLayout>
          <div className='fixed left-72 h-lvh w-4/5 top-36 pt-4'>
            <Article articles={articles} categories={categories} />
          </div>
        </SettingsLayout>
      </body>
    </html>
  );
}

