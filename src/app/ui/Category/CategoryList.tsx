import { categoryAPI } from '@/app/lib/services/CategoryServices';
import { ICategory } from '@/interfaces/ICategory';
import Link from 'next/link';
import React from 'react';
import ItemCategory from './ItemCategory';
import NewButton from '@/components/Settings/Buttons/NewButton';

const CategoryList = async () => {
  const categories = await categoryAPI.getCategory()
  // if (!categories || categories.length === 0) {
  //   return <div>Нет данных о категориях.</div>;
  // }

  return (
    <div>
      <div className='fixed flex left-72 top-20 w-3/4 border-b pb-4'>
        <NewButton address='/settings/category/newcategory' />

        <div className='fixed left-72 h-full w-4/5 top-36 pt-4 overflow-auto'>
          {categories && categories.map((category: ICategory) => (
            <ItemCategory key={category.id_category} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
