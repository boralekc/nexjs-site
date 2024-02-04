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

  return (
    <html lang='en'>
      <body>
        <SettingsLayout>
          {/* <div className='fixed left-72 h-full w-4/5 top-36 pt-4 overflow-auto'> */}
          <Users />
        </SettingsLayout>
      </body>
    </html>
  );
};
