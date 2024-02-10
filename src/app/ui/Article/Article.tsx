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

const Article: React.FC<ArticleProps> = ({articles, categories, selectedCategory}) => {
 
  return (
        <div className='fixed left-72 w-4/5 top-36 pt-4 overflow-auto h-screen'>
          {articles && articles.map((article: IArticle) => (
            <ItemArticle key={article.id_article} article={article} categories={categories} selectedCategory={selectedCategory}/>
          ))}
        </div>
  );
};

export default Article;
