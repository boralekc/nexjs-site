import EditButton from "@/shared/EditButton";
import DeleteCategory from "./DeleteCategory";
import { ICategory } from "@/entities/category/model/ICategory";


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
                <EditButton itemId={Number(category.id_category)} address='/dashboard/category/edit/' />
                <DeleteCategory id_category={Number(category.id_category)} />
            </div>
        </div>
    );
};

export default ItemCategory;
