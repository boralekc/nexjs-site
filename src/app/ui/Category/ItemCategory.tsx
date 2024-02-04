import { ICategory } from "@/interfaces/ICategory";
import DeleteCategory from "./DeleteCategory";
import EditButton from "@/components/Settings/Buttons/EditButton";

interface EditCategoryProps {
    category: ICategory;
}

const ItemCategory: React.FC<EditCategoryProps> = ({ category }) => {

    return (
        <div>
            <div key={category.id_category} className='flex h-16 mt-4 bg-gray-100 rounded-xl shadow-lg p-2 mr-16 ml-auto'>
                <p className='pt-2 pl-2 font-semibold mr-3 w-full'>
                    {category.name}
                </p>
                <EditButton itemId={category.id_category} address='/settings/category/edit/' />
                <DeleteCategory id_category={category.id_category} />
            </div>
        </div>
    );
};

export default ItemCategory;
