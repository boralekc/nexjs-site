import ButtonNewItems from "@/components/Settings/Buttons/ButtonNewItems";
import { ICategory } from "@/interfaces/ICategory";

interface EditCategoryProps {
    category: ICategory;
}

const EditCategory: React.FC<EditCategoryProps> = ({ category }) => {

    return (
        <div className='fixed left-72 h-3/4 w-3/4 top-24 overflow-auto shadow-2xl rounded-xl'>
            <div className="mt-6 mx-6">
                <div className="pb-4 font-bold">Заголовок статьи</div>
                <textarea className="border w-full rounded-md">{category?.name || 'Введите заголовок'}</textarea>
            </div>
            <ButtonNewItems />
        </div>
    );
};

export default EditCategory;
