'use client'
import Link from "next/link"
import { useFormStatus } from "react-dom";

const ButtonNewItems = ({ address }: { address: string }) => {
    const { pending } = useFormStatus();

    return (
        <div className="flex justify-end w-full pr-6 mt-6">
            <button type='submit' className='bg-green-400 hover:bg-green-600 text-black text-sm border-blue-700 font-bold py-2 px-4 rounded-xl'>
                {pending ? 'Working.....' : 'Save'}
            </button>
            <Link href={address} type='button' className='bg-orange-400 hover:bg-orange-500 text-black text-sm font-bold py-2 px-4 rounded-xl ml-2'>
                {pending ? 'Working.....' : 'Cancel'}
            </Link>
        </div>
    )
}

export default ButtonNewItems