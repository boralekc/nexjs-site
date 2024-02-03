'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

const Navigation = () => {
    const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

    return (
        <div>
            <Link href='/' className="flex items-center pb-4 border-b border-b-gray-800">
                <img src='https://placehold.co/32x32' alt='' className="w-8 h-8 rounded object-cover" />
                <span className='text-lg font-bold text-white ml-3'>Logo</span>
            </Link>
            <ul className='md-4'>
                <li className='mt-1'>
                    <Link href='/settings' className={`flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md ${isActive('/settings') ? 'bg-gray-800 text-white' : ''}`}>
                        <i className="ri-home-2-line mr-3 text-lg"></i>
                        <span className='text-sm'>Dashboard</span>
                    </Link>
                </li>
                <li className='mt-1'>
                    <Link href='/settings/articles' className={`flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md ${isActive('/settings/articles') ? 'bg-gray-800 text-white' : ''}`}>
                        <i className="ri-article-line mr-3 text-lg"></i>
                        <span className='text-sm'>Articles</span>
                    </Link>
                </li>
                <li className='mt-1'>
                    <Link href='/settings/category' className={`flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md ${isActive('/settings/category') ? 'bg-gray-800 text-white' : ''}`}>
                        <i className="ri-store-3-line mr-3 text-lg"></i>
                        <span className='text-sm'>Categories</span>
                    </Link>
                </li>
                <li className='mt-1'>
                    <Link href='/settings/users' className={`flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md ${isActive('/settings/users') ? 'bg-gray-800 text-white' : ''}`}>
                        <i className="ri-file-user-line mr-3 text-lg"></i>
                        <span className='text-sm'>Users</span>
                    </Link>
                </li>
                <li className='mt-1'>
                    <Link href='/settings/setting' className='flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 round-md  group-[.active]:bg-gray-800 group-[.active]:text-white'>
                        <i className="ri-settings-3-line mr-3 text-lg"></i>
                        <span className='text-sm'>Settings</span>
                    </Link>
                </li>
            </ul>
            <div className='mt-72'>
                <Link href='/' className='flex items-center border-t  border-t-gray-800 py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 round-md  group-[.active]:bg-gray-800 group-[.active]:text-white'>
                    <i className="ri-logout-box-line mr-3 text-lg"></i>
                    <span className='text-sm'>Sign out</span>
                </Link>
            </div>
        </div>
    )
}

export default Navigation