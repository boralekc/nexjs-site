'use client'

import ButtonItems from '@/components/Settings/Buttons/ButtonItems';
import NewButton from '@/components/Settings/Buttons/NewButton';
import { ICategory } from '@/interfaces/ICategory';
import { IUser } from '@/interfaces/IUser';
import { usePathname } from 'next/navigation';
import React from 'react';

interface UsersProps {
  users: IUser[];
  categories: ICategory[];
}

const Users: React.FC<UsersProps> = ({ users, categories }) => {
  const pathname = usePathname()
  if (!users || users.length === 0) {
    return <div>Нет данных о категориях.</div>;
  }

  return (
    <div>
      <div className='fixed flex left-72 top-20 w-3/4 border-b pb-4'>
        {NewButton(pathname)}
      </div>
      <div>
        {users.map((user) => (
          <div key={user.user_id} className='flex h-16 mt-4 bg-gray-100 rounded-xl shadow-lg p-2 mr-16 ml-auto'>
            <p className='pt-2 pl-2 font-semibold mr-3 w-full'>
              {user.username}
            </p>
            {ButtonItems('/settings/users')}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
