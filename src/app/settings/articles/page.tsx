import Article from '@/app/ui/Article/Article';
import SettingsLayout from '@/layouts/SettingsLayout';
import { articleAPI } from '@/app/lib/services/ArticleServices';
import { categoryAPI } from '@/app/lib/services/CategoryServices';
import { IArticle } from '@/interfaces/IArticle';
import { ICategory } from '@/interfaces/ICategory';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Articles',
  description: '',
}

export default function ArticlePage() {
   
  return (
    <html lang='en'>
      <body>
        <SettingsLayout>
          {/* <div className='fixed left-72 h-lvh w-4/5 top-36 pt-4'> */}
            <Article />
        </SettingsLayout>
      </body>
    </html>
  );
}

