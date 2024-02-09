import EditButton from "@/components/Settings/Buttons/EditButton";
import { IUser } from "@/interfaces/IUser";
import DeleteUser from "./DeleteUser";

interface EditUsersProps {
    user: IUser;
}

const ItemUser: React.FC<EditUsersProps> = ({ user }) => {

    return (
        <div>
            <div key={user.user_id} className='flex h-16 mt-4 bg-gray-100 rounded-xl shadow-lg p-2 mr-16 ml-auto'>
                <p className='pt-2 pl-2 font-semibold mr-3 w-full'>
                    {user.username}
                </p>
                <EditButton itemId={Number(user.user_id)} address='/settings/users/edit/'/>
                <DeleteUser user_id={Number(user.user_id)} />
            </div>
        </div>
    );
};

export default ItemUser;
