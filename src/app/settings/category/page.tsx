import SettingsLayout from '@/layouts/SettingsLayout';
import { Metadata } from 'next';
import CategoryList from '@/app/ui/Category/CategoryList';

export const metadata: Metadata = {
  title: 'Category',
  description: '',
}

export default async function CategoryPage() {

  return (
    <html lang='en'>
      <body>
        <SettingsLayout>
          <CategoryList />
        </SettingsLayout>
      </body>
    </html>
  );
};


