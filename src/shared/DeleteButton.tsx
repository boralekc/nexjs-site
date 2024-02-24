'use client'
import { useFormStatus } from "react-dom"

const DeleteButton = ({buttonLabel}: { buttonLabel: string }) => {
    const { pending } = useFormStatus(); 

    return (
            <button type='submit' className='bg-orange-400 hover:bg-orange-500 text-black text-sm font-bold py-2 px-4 rounded-xl mt-1.5'>
                {pending ? 'Working.....' : buttonLabel }
            </button>
        );
}

export default DeleteButton