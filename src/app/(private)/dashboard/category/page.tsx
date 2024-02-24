
import CategoryList from '@/features/category/CategoryList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Category',
  description: '',
}

export default async function CategoryPage() {

  return (
      <CategoryList />
  );
};


