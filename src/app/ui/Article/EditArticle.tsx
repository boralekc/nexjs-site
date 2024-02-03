import { useEffect, useState } from "react";
import { articleAPI } from "@/app/lib/services/ArticleServices";
import ButtonNewItems from "@/components/Settings/Buttons/ButtonNewItems";
import { IArticle } from "@/interfaces/IArticle";
import { ICategory } from "@/interfaces/ICategory";

interface EditArticleProps {
    article: IArticle;
    categories: ICategory[];
}

const EditArticle: React.FC<EditArticleProps> = ({article, categories}) => {
    
    return (
        <div>
        {/* <div className="flex mt-6 mx-6 border-b pb-4">
                        <p className="mr-4 font-bold pt-2">Выберите категорию:</p>
                        <select className='border rounded-md pl-2 py-1 pr-24' value={selectedCategory || ""} onChange={handleSelectChange}>
                            <option value={0}>{article.}</option>
                            {categories && categories.map((category: ICategory) => (
                                <option key={category.id_category} value={category.id_category}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </div> */}
        <div className='fixed left-72 h-3/4 w-3/4 top-24 overflow-auto shadow-2xl rounded-xl'>
            <div className="mt-6 mx-6">
                <div className="pb-4 font-bold">Заголовок статьи</div>
                <textarea className="border w-full rounded-md">{article?.title || 'Введите заголовок'}</textarea>
            </div>
            <div className="mt-6 mx-6">
                <div className="pb-4 font-bold">Текст статьи</div>
                <textarea className="border w-full h-56 rounded-md">{article?.content || 'Введите текст статьи'}</textarea>
            </div>
            <ButtonNewItems />
        </div>
        </div>
    );
};

export default EditArticle;
