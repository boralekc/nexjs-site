import React from 'react';
import NewButton from '@/shared/NewButton';
import ItemCategory from './ItemCategory';
import { ICategory } from '@/entities/category/model/ICategory';
import { categoryAPI } from '@/shared/api/services/CategoryServices';


const CategoryList = async () => {
  const categories = await categoryAPI.getCategory()
  // if (!categories || categories.length === 0) {
  //   return <div>Нет данных о категориях.</div>;
  // }

  return (
    <div>
      <div className='fixed flex left-72 top-20 w-3/4 border-b pb-4'>
        <NewButton address='/dashboard/category/newcategory' />
        <div className='fixed left-72 w-4/5 top-36 pt-4 overflow-auto h-screen'>
          {categories && categories.map((category: ICategory) => (
            <ItemCategory key={category.id_category} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
