'use client'
import { IArticle } from '@/interfaces/IArticle';
import React from 'react';
import ItemArticle from './ItemArticle';
import { ICategory } from '@/interfaces/ICategory';

interface ArticleProps {
  articles: IArticle[],
  categories: ICategory[],
  selectedCategory: number | null
}

// const Article: React.FC<ArticleProps> = ({articles, categories, selectedCategory}) => {
 
//   return (
//         // <div className='fixed left-72 w-4/5 top-36 pt-4 overflow-auto h-screen'>
//         //   {articles && articles.map((article: IArticle) => (
//         //     <ItemArticle key={article.id_article} article={article} categories={categories} selectedCategory={selectedCategory}/>
//         //   ))}
//         // </div>
//         <div className='fixed left-72 w-4/5 top-36 pt-4 overflow-auto h-screen'>
//         {categories && categories.articles.map((article: IArticle) => (
//           <ItemArticle key={article.id_article} article={article} categories={categories} selectedCategory={selectedCategory}/>
//         ))}
//           </div>
//       )}
//   );

const Article: React.FC<ArticleProps> = ({ articles, categories, selectedCategory }) => {
 
  return (
    <div className='fixed left-72 w-4/5 top-36 pt-4 overflow-auto h-screen'>
      {categories && categories.map((category: ICategory) => (
        // Проверяем, выбрана ли категория
        selectedCategory === null || category.id_category === selectedCategory ? (
          // Если выбрана категория или категория не выбрана, отображаем статьи категории
          category.articles && category.articles.map((article: IArticle) => (
            <ItemArticle key={article.id_article} article={article} selectedCategory={selectedCategory}/>
          ))
        ) : null
      ))}
    </div>
  );
};


export default Article;
