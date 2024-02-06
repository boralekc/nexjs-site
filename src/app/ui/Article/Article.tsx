import { articleAPI } from '@/app/lib/services/ArticleServices';
import { categoryAPI } from '@/app/lib/services/CategoryServices';
import NewButton from '@/components/Settings/Buttons/NewButton';
import Select from '@/components/Settings/Select';
import { IArticle } from '@/interfaces/IArticle';
import React, { useState } from 'react';
import ItemArticle from './ItemArticle';

const Article = async () => {
  const articles = await articleAPI.getArticles();
  const categories = await categoryAPI.getCategory();
  
  // const pathname = usePathname()
  // const [selectedCategory, setSelectedCategory] = useState<number | null>(null);


  // const getCategoryNameById = (categoryId: number): string | undefined => {
  //   const foundCategory = categories?.find(category => category.id_category === categoryId);
  //   return foundCategory ? foundCategory.name : "Статья не привязана к категории";
  // };

  // const filteredArticles = selectedCategory
  //   ? articles?.filter(article => article.id_category === selectedCategory)
  //   : articles;

  // const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   const selectedId = parseInt(event.target.value, 10);
  //   setSelectedCategory(selectedId === 0 ? null : selectedId);
  // };

  // if (!articles || articles.length === 0) {
  //   return <div>Нет данных о статьях.</div>;
  // }

  return (
    <div className='overflow-auto h-screen'>
      <div className='fixed flex left-72 top-20 w-3/4 border-b pb-4'>
        {/* <div className="flex">
          <p className="mr-4 font-bold pt-2.5">Выберите категорию:</p>
          <select className='border rounded-2xl pl-2 py-2 pr-24' value={selectedCategory || ""} onChange={handleSelectChange}>
            <option value={0}>Все</option>
            {categories && categories.map((category: ICategory) => (
              <option key={category.id_category} value={category.id_category}>
                {category.name}
              </option>
            ))}
          </select>
        </div> */}
      </div>
      <div>
      <div className='fixed flex left-72 top-20 w-3/4 border-b pb-4'>
      {/* <Select /> */}
        <NewButton address='/settings/category/newcategory' />

        <div className='fixed left-72 w-4/5 top-36 pt-4 overflow-auto h-screen'>
          {articles && articles.map((article: IArticle) => (
            <ItemArticle key={article.id_article} article={article} />
          ))}
        </div>
      </div>
    </div>
      {/* <div>
        {filteredArticles && filteredArticles.length > 0 ? (
          filteredArticles.map((article: IArticle) => (
            <div key={article.id_article} className='flex h-16 mt-4 bg-gray-100 rounded-xl shadow-lg p-2 mr-16 ml-auto'>
              <div className='pt-2 pl-2 font-semibold mr-3 w-full'>
                {article.title}
                <div className='border-t mt-1 text-xs'>
                  Категория: {getCategoryNameById(article.id_category)}
                </div>
              </div>
              <div className='flex mt-1.5'>
                <Link href={`/settings/articles/edit/${article.id_article}`} className='bg-gray-300 hover:bg-gray-500 text-blue text-sm border-blue-700 font-bold py-3 px-6 rounded-xl mr-2'>Edit</Link>
                <button type='button' className='bg-orange-400 hover:bg-orange-500 text-black text-sm font-bold py-2 px-4 rounded-xl'>Delete</button>
              </div>
            </div>
          ))
        ) : (
          <p>В выбранной категории нет статей для отображения.</p>
        )}
      </div> */}
    </div>
  );
};

export default Article;
