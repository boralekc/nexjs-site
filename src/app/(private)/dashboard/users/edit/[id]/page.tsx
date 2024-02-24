import { IUser } from "@/entities/user/model/IUser";
import EditUser from "@/features/users/EditUser";
import { usersAPI } from "@/shared/api/services/UserServices";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Edit user',
    description: '',
  }

interface ItemUserProps {
    params: {
        id: IUser;
    }
}

export default async function CategoryItemPage ({ params: { id } }: ItemUserProps) {
    const userId = Number(id);
    const user = await usersAPI.getOneUser(userId)

    if (!user) {
        return <div>Пользователь не найден</div>;
    }

    return (
        <EditUser user={user} />
    )
}
