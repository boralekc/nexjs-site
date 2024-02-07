'use client'
import NewButton from "@/components/Settings/Buttons/NewButton"
import { ICategory } from "@/interfaces/ICategory"
import { useState } from "react";
import Article from "../Article";
import { IArticle } from "@/interfaces/IArticle";

interface SelectedArticleprops {
    categories: ICategory[],
    articles: IArticle[]
}

const SelectedArticle: React.FC<SelectedArticleprops> = ({categories, articles}) => {
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedId = parseInt(event.target.value, 10);
        setSelectedCategory(selectedId === 0 ? null : selectedId);
      };

    return (
        <div className='fixed flex left-72 top-20 w-3/4 border-b pb-4'>
        <div className="flex">
          <p className="mr-4 font-bold pt-2.5">Выберите категорию:</p>
          <select className='border rounded-2xl pl-2 py-2 pr-24 h-10' value={selectedCategory || ""} onChange={handleSelectChange}>
            <option value={0}>Все</option>
            {categories && categories.map((category: ICategory) => (
              <option key={category.id_category} value={category.id_category}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <Article selectedCategory={selectedCategory} articles={articles} categories={categories} />
        <NewButton address='/settings/articles/newarticle' />
      </div>
    )
}

export default SelectedArticle

