import Link from "next/link";

export default function Home() {
    return (
        <div className='flex border justify-center items-end '>
            <div className='flex justify-center w-full'>
                <Link href='/settings/category' className="flex items-end border shadow-xl rounded-xl mr-8 mb-10 font-bold h-60 w-1/4">
                    <p className="border-t rounded-b-xl w-full h-1/5 text-center pt-2 bg-green-500">Категории</p>
                </Link>
                <Link href='/settings/articles' className="flex items-end border shadow-xl rounded-xl mr-8 mb-10 font-bold h-60 w-1/4">
                    <p className="border-t rounded-b-xl w-full h-1/5 text-center pt-2 bg-cyan-500">Статьи</p>
                </Link>
                <Link href='/settings/users' className="flex items-end border shadow-xl rounded-xl mr-8 mb-10 font-bold h-60 w-1/4">
                    <p className="border-t rounded-b-xl w-full h-1/5 text-center pt-2 bg-violet-600">Пользователи</p>
                </Link>
            </div>
        </div>
    )
}
