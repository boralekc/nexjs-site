import Users from '@/features/users/UserList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Users',
  description: '',
}

export default async function UsersPage() {

  return (
        <Users />
  );
};
