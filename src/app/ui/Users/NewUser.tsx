import { createUser } from "@/actions/ActionUser";
import ButtonNewItems from "@/components/Settings/Buttons/ButtonNewItems";

export default function NewUser() {
    
    return (
        <form name='newCategory' action={createUser}>
            <div className='fixed left-72 h-3/4 w-3/4 top-24 overflow-auto shadow-2xl rounded-xl'>
                <div className="mt-6 mx-6">
                    <div className="pb-4 font-bold">Логин</div>
                    <textarea required name='username' className="border w-full h-8 rounded-md" placeholder='Введите логин' />
                </div>
                <div className="mt-6 mx-6">
                    <div className="pb-4 font-bold">Адрес эл. почты</div>
                    <textarea required name='email' className="border w-full h-8 rounded-md" placeholder='Введите адрес эл. почты' />
                </div>
                <div className="mt-6 mx-6">
                    <div className="pb-4 font-bold">Пароль</div>
                    <textarea required name='password' className="border w-full h-8 rounded-md" placeholder='Введите пароль' />
                </div>
                <ButtonNewItems address={'/settings/users'} />
            </div>
        </form>
    )
}
