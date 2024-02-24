import Link from "next/link"

const AuthForm = () => {
    return (
        <div className="flex flex-col justify-center">
        <div className="mx-auto mt-44 max-w-md rounded-xl shadow-xl">
        <form action="#" className="mx-10 my-10">
            <label>Name</label>
            <div>
            <div></div>
            <input className="border" type="text" id='name' />
            </div>
            <label>Password</label>
            <div>
            <div></div>
            <input className="border" type="text" id='name' />
            </div>
            <div className="mt-6">
                <button className="mx-4 border py-2 px-2 rounded-lg">Войти</button>
                <Link href="/" className="mx-4 border py-2 px-2 rounded-lg">Отмена</Link>
            </div>
        </form>
        </div>
        </div>
    )
}

export default AuthForm