import SettingsLayout from '@/layouts/SettingsLayout';
import { categoryAPI } from '@/app/lib/services/CategoryServices';
import Category from '@/app/ui/Category/CategoryList';
import { Metadata } from 'next';
import { ICategory } from '@/interfaces/ICategory';
import Link from 'next/link';
import CategoryList from '@/app/ui/Category/CategoryList';

export const metadata: Metadata = {
  title: 'Category',
  description: '',
}

export default async function CategoryPage() {
  const categories = await categoryAPI.getCategory()
  // if (!categories || categories.length === 0) {
  //   return <div>Нет данных о категориях.</div>;
  // }


  return (
    <html lang='en'>
      <body>
        <SettingsLayout>
        {/* <form name='id_category'>
          <div className='fixed left-72 h-full w-4/5 top-36 pt-4 overflow-auto'>
            <div>
              <Category />
              <div>
                {categories.map((category: ICategory) => (
                  <div key={category.id_category} className='flex h-16 mt-4 bg-gray-100 rounded-xl shadow-lg p-2 mr-16 ml-auto'>
                    <p className='pt-2 pl-2 font-semibold mr-3 w-full'>
                      {category.name}
                    </p>
                    <input type='hidden' name='id_category' value={category.id_category} />
                    <Link href={`/settings/category/edit/${category.id_category}`} className='bg-gray-300 hover:bg-gray-500 text-blue text-sm border-blue-700 font-bold py-3 px-6 rounded-xl mr-2'>Edit</Link>
                    <button type="submit" className='bg-orange-400 hover:bg-orange-500 text-black text-sm font-bold py-2 px-4 rounded-xl'>Delete</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </form> */}
          <CategoryList />
        </SettingsLayout>
      </body>
    </html>
  );
};


