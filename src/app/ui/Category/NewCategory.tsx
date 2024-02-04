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
                    <ButtonNewItems address={'/settings/category'} />
                </div>
            </div>
        </form>
    )
}
