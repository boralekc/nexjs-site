import { createCategory } from "@/actions/ActionCategory";
import ButtonNewItems from "@/components/Settings/Buttons/ButtonNewItems";
import Link from "next/link";

export default function NewCategoryForm() {
    return (
        <form name='newCategory' action={createCategory}>
            <div className='fixed left-72 h-3/4 w-3/4 top-24 overflow-auto shadow-2xl rounded-xl'>
                <div className="mt-16 mx-6">
                    <div className="pb-4 font-bold">Название категории</div>
                    <textarea required name='name' className="border w-full rounded-md" placeholder='Введите название категории' />
                </div>
                <div className="flex justify-end w-full pr-6 mt-6">
                    <button className='bg-green-400 hover:bg-green-600 text-black text-sm border-blue-700 font-bold py-2 px-4 rounded-xl'>Save</button>
                    <Link href='/settings/category' className='bg-orange-400 hover:bg-orange-500 text-black text-sm font-bold py-2 px-4 rounded-xl ml-2'>Cancel</Link>
                </div>
            </div>
        </form>
    )
}
