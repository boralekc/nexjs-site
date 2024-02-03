import Link from "next/link"

const ButtonItems = (path: string) => {

    return (
        <div className='flex mt-1.5'>
            <Link href={path} className='bg-gray-300 hover:bg-gray-500 text-blue text-sm border-blue-700 font-bold py-3 px-6 rounded-xl mr-2'>Edit</Link>
            <button type='button' className='bg-orange-400 hover:bg-orange-500 text-black text-sm font-bold py-2 px-4 rounded-xl'>Delete</button>
        </div>
    )
}

export default ButtonItems