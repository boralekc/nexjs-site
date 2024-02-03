import SettingsLayout from '@/layouts/SettingsLayout';
import { UsersAPI } from '@/app/lib/services/UserServices';
import Users from '@/app/ui/Users/User';
import { categoryAPI } from '@/app/lib/services/CategoryServices';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Users',
  description: '',
}

export default async function UsersPage() {
  const users = await UsersAPI.getUsers()
  const categories = await categoryAPI.getCategory()

  return (
    <html lang='en'>
      <body>
        <SettingsLayout>
          <div className='fixed left-72 h-full w-4/5 top-36 pt-4 overflow-auto'>
            <Users users={users} categories={categories} />
          </div>
        </SettingsLayout>
      </body>
    </html>
  );
};
