import React from 'react';
import Link from 'next/link';

export default async function HomePage() {
    return (
        <div className='flex border justify-center items-end '>
            <div className='flex justify-center w-full'>
                <Link href='/dashboard/category' className="flex items-end border shadow-xl rounded-xl mr-8 mb-10 font-bold h-60 w-1/4">
                    <p className="border-t rounded-b-xl w-full h-1/5 text-center pt-2 bg-green-500">Категории</p>
                </Link>
                <Link href='/dashboard/articles' className="flex items-end border shadow-xl rounded-xl mr-8 mb-10 font-bold h-60 w-1/4">
                    <p className="border-t rounded-b-xl w-full h-1/5 text-center pt-2 bg-cyan-500">Статьи</p>
                </Link>
                <Link href='/dashboard/users' className="flex items-end border shadow-xl rounded-xl mr-8 mb-10 font-bold h-60 w-1/4">
                    <p className="border-t rounded-b-xl w-full h-1/5 text-center pt-2 bg-violet-600">Пользователи</p>
                </Link>
            </div>
        </div>
    )
}

