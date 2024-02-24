'use client'
import Link from "next/link";
import { useFormStatus } from "react-dom"

const NewButton = ({ address }: { address: string }) => {
    const { pending } = useFormStatus();

    return (

        <Link href={address} className='flex justify-center items-center bg-green-400 hover:bg-green-600 text-sm font-bold rounded-xl mr-4 mt-1 w-20 h-9 ml-auto'>
            {pending ? 'Working.....' : 'New'}
        </Link>

    );
}

export default NewButton