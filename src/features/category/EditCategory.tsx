import { updateCategory } from "@/actions/ActionCategory";
import ButtonNewItems from "@/shared/ButtonNewItems";
import { ICategory } from "@/interfaces/ICategory";

interface EditCategoryProps {
    category: ICategory;
}

const EditCategory: React.FC<EditCategoryProps> = ({ category }) => {

    return (
        <form name='updateCategory' action={updateCategory}>
            <div className='fixed left-72 h-3/4 w-3/4 top-24 overflow-auto shadow-2xl rounded-xl'>
                <div className="mt-6 mx-6">
                    <div className="pb-4 font-bold">Заголовок статьи</div>
                    <input type='hidden' required name='id_category' value={category.id_category} />
                    <textarea required name='name' className="border w-full rounded-md">{category?.name || 'Введите заголовок'}</textarea>
                </div>
                <ButtonNewItems address={'/dashboard/category'} />
            </div>
        </form>
    );
};

export default EditCategory;
