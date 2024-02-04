

export default function NewUser() {
    return (
        <div className='fixed left-72 h-3/4 w-3/4 top-24 overflow-auto shadow-2xl rounded-xl'>
            <div className="mt-6 mx-6">
                <div className="pb-4 font-bold">Логин</div>
                <textarea className="border w-full h-8 rounded-md">Введите логин</textarea>
            </div>
            <div className="mt-6 mx-6">
                <div className="pb-4 font-bold">Адрес эл. почты</div>
                <textarea className="border w-full h-8 rounded-md">Введите адрес эл. почты</textarea>
            </div>
            <div className="mt-6 mx-6">
                <div className="pb-4 font-bold">Пароль</div>
                <textarea className="border w-full h-8 rounded-md">Введите пароль</textarea>
            </div>
        </div>
    )
}
