import Link from "next/link"

const ButtonNewItems = () => {

    return (
        <div className="flex justify-end w-full pr-6 mt-6">
            <button type='button' className='bg-green-400 hover:bg-green-600 text-black text-sm border-blue-700 font-bold py-2 px-4 rounded-xl'>Save</button>
            <button type='button' className='bg-orange-400 hover:bg-orange-500 text-black text-sm font-bold py-2 px-4 rounded-xl ml-2'>Cancel</button>
        </div>
    )
}

export default ButtonNewItems