import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Dashboard',
  description: '',
}

export default function DashboardPage() {
  return (
    <div className="text-gray-800 font-inter ">
            <div className='flex w-4/6 top-24 pt-16 ml-auto overflow-auto'>
                <Link href='/dashboard/category' className="flex items-end border shadow-xl rounded-xl mr-8 mb-10 font-bold h-60 w-1/4">
                    <div className="border-t rounded-b-xl w-full h-1/5 text-center pt-2 bg-green-500">Категории</div>
                </Link>
                <Link href='/dashboard/articles' className="flex items-end border shadow-xl rounded-xl mr-8 mb-10 font-bold h-60 w-1/4">
                    <div className="border-t rounded-b-xl w-full h-1/5 text-center pt-2 bg-cyan-500">Статьи</div>
                </Link>
                <Link href='/dashboard/users' className="flex items-end border shadow-xl rounded-xl mr-8 mb-16 font-bold h-60 w-1/4">
                    <div className="border-t rounded-b-xl w-full h-1/5 text-center pt-2 bg-violet-600">Пользователи</div>
                </Link>
            </div>
    </div>
)
  }
