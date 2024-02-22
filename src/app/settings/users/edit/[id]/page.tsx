import { categoryAPI } from "@/app/api/services/CategoryServices";
import { usersAPI } from "@/app/api/services/UserServices";
import EditCategory from "@/app/ui/Category/EditCategory";
import EditUser from "@/app/ui/Users/EditUser";
import { ICategory } from "@/interfaces/ICategory";
import { IUser } from "@/interfaces/IUser";
import SettingsLayout from "@/layouts/SettingsLayout"
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
        // Обработка случая, когда статья не найдена
        return <div>Пользователь не найден</div>;
    }

    return (
        <html lang='en'>
            <body>
                <SettingsLayout>
                    <EditUser user={user} />
                </SettingsLayout>
            </body>
        </html>
    )
}
