import Link from "next/link";

const NewButton = (path: string) => {
    if (path === '/settings/articles') {
        return (
            <Link href='/settings/articles/newarticle'
                className='flex w-20 ml-auto mr-4 bg-green-400 hover:bg-green-600 text-black text-sm font-bold pt-2.5 px-6 py-2 rounded-xl'>
                <div>New</div>
            </Link>
        );
    }
    else if (path === '/settings/category') {
        return (
            <Link href='/settings/category/newcategory'
                className='flex w-20 ml-auto mr-4 bg-green-400 hover:bg-green-600 text-black text-sm font-bold pt-2.5 px-6 py-2 rounded-xl'>
                <div>New</div>
            </Link>
        );
    }
    else if (path === '/settings/users') {
        return (
            <Link href='/settings/users/newuser'
                className='flex w-20 ml-auto mr-4 bg-green-400 hover:bg-green-600 text-black text-sm font-bold pt-2.5 px-6 py-2 rounded-xl'>
                <div>New</div>
            </Link>
        );
    };
}

export default NewButton