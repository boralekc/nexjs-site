import NewButton from '@/shared/NewButton';
import React from 'react';
import ItemUser from './ItemUser';
import { IUser } from '@/entities/user/model/IUser';
import { usersAPI } from '@/shared/api/services/UserServices';

const Users = async () => {
  const users = await usersAPI.getUsers()
  // if (!users || users.length === 0) {
  //   return <div>Нет данных о категориях.</div>;
  // }

  return (

    <div>
      <div className='fixed flex left-72 top-20 w-3/4 border-b pb-4'>
        <NewButton address='/dashboard/users/newuser' />

        <div className='fixed left-72 h-full w-4/5 top-36 pt-4 overflow-auto'>
          {users.map((user: IUser) => (
            <ItemUser key={user.user_id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
