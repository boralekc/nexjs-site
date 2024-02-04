import { updateUser } from "@/actions/ActionUser";
import ButtonNewItems from "@/components/Settings/Buttons/ButtonNewItems";
import { IUser } from "@/interfaces/IUser";

interface EditUsersProps {
    user: IUser;
}

const EditUser: React.FC<EditUsersProps> = ({ user }) => {

    return (
        <form name='updateUser' action={updateUser}>
            <div className='fixed left-72 h-3/4 w-3/4 top-24 overflow-auto shadow-2xl rounded-xl'>
                <div className="mt-6 mx-6">
                    <input type="hidden" required name='user_id' value={user.user_id} />
                    <div className="mt-6 mx-6">
                        <div className="pb-4 font-bold">Логин</div>
                        <textarea required name='username' className="border w-full h-8 rounded-md">{user?.username}</textarea>
                    </div>
                    <div className="mt-6 mx-6">
                        <div className="pb-4 font-bold">Адрес эл. почты</div>
                        <textarea required name='email' className="border w-full h-8 rounded-md">{user?.email}</textarea>
                    </div>
                    <div className="mt-6 mx-6">
                        <div className="pb-4 font-bold">Пароль</div>
                        <textarea required name='password' className="border w-full h-8 rounded-md">{user?.password}</textarea>
                    </div>
                </div>
                <ButtonNewItems address={'/settings/users'} />
            </div>
        </form>
    );
};

export default EditUser;
