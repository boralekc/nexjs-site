'use client'
import Link from "next/link";
import { useFormStatus } from "react-dom"

const EditButton = ({ itemId, address }: { itemId: number; address: string }) => {
    const { pending } = useFormStatus();

    return (
        <Link href={`${address}/${itemId}`} className='flex justify-center items-center bg-gray-300 hover:bg-gray-500 text-sm font-bold rounded-xl mr-2 mt-1.5 h-9 w-24'>
            {pending ? 'Working.....' : 'Edit'}
        </Link>
    );
}

export default EditButton