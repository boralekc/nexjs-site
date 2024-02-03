import { deleteCategory } from '@/actions/ActionCategory';
import { categoryAPI } from '@/app/lib/services/CategoryServices';
import { ICategory } from '@/interfaces/ICategory';
import Link from 'next/link';
import React from 'react';
import ItemCategory from './ItemCategory';

const CategoryList = async () => {
  const categories = await categoryAPI.getCategory()
  // if (!categories || categories.length === 0) {
  //   return <div>Нет данных о категориях.</div>;
  // }

  return (

    <div>
      <div className='fixed flex left-72 top-20 w-3/4 border-b pb-4'>
        <Link href='/settings/category/newcategory'
          className='flex w-20 ml-auto mr-4 bg-green-400 hover:bg-green-600 text-black text-sm font-bold pt-2.5 px-6 py-2 rounded-xl'>
          <div>New</div>
        </Link></div>

      <div>
        <div className='fixed left-72 h-full w-4/5 top-36 pt-4 overflow-auto'>
          <div>
            <div>
              {categories && categories.map((category: ICategory) => (
                <ItemCategory key={category.id_category} category={category}/>
                // <div key={category.id_category} className='flex h-16 mt-4 bg-gray-100 rounded-xl shadow-lg p-2 mr-16 ml-auto'>
                //   <p className='pt-2 pl-2 font-semibold mr-3 w-full'>
                //     {category.name}
                //   </p>
                //   <input type='hidden' name='id_category' value={category.id_category} />
                //   <Link href={`/settings/category/edit/${category.id_category}`} className='bg-gray-300 hover:bg-gray-500 text-blue text-sm border-blue-700 font-bold py-3 px-6 rounded-xl mr-2'>Edit</Link>
                //   <button className='bg-orange-400 hover:bg-orange-500 text-black text-sm font-bold py-2 px-4 rounded-xl'>Delete</button>
                // </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
