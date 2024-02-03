import { useEffect, useState } from "react";
import { articleAPI } from "@/app/lib/services/ArticleServices";
import ButtonNewItems from "@/components/Settings/Buttons/ButtonNewItems";
import { IArticle } from "@/interfaces/IArticle";
import { ICategory } from "@/interfaces/ICategory";
import { categoryAPI } from "@/app/lib/services/CategoryServices";
import Link from "next/link";
import DeleteCategory from "./DeleteCategory";

interface EditCategoryProps {
    category: ICategory;
}

const ItemCategory: React.FC<EditCategoryProps> = ({ category }) => {

    return (
        <div>
            {/* <div className='fixed left-72 h-3/4 w-3/4 top-24 overflow-auto shadow-2xl rounded-xl'>
                <div className="mt-6 mx-6">
                    <h1>{category.name}</h1>
                </div>
                <ButtonNewItems />
            </div> */}
            <div key={category.id_category} className='flex h-16 mt-4 bg-gray-100 rounded-xl shadow-lg p-2 mr-16 ml-auto'>
                <p className='pt-2 pl-2 font-semibold mr-3 w-full'>
                    {category.name}
                </p>
                {/* <input type='hidden' name='id_category' value={category.id_category} /> */}
                <Link href={`/settings/category/edit/${category.id_category}`} className='bg-gray-300 hover:bg-gray-500 text-blue text-sm border-blue-700 font-bold py-3 px-6 rounded-xl mr-2'>Edit</Link>
                {/* <button className='bg-orange-400 hover:bg-orange-500 text-black text-sm font-bold py-2 px-4 rounded-xl'>Delete</button> */}
                <DeleteCategory id_category={category.id_category} />
            </div>
        </div>
    );
};

export default ItemCategory;
