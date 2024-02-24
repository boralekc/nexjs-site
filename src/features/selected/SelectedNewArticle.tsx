'use client'
import { ICategory } from "@/interfaces/ICategory"
import NewArticleForm from "@/shared/NewArticleForm";
import { useState } from "react";


interface SelectedNewArticleProps {
    categories: ICategory[]
}

const SelectedNewArticle: React.FC<SelectedNewArticleProps> = ({ categories }) => {
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedId = parseInt(event.target.value, 10);
        setSelectedCategory(selectedId === 0 ? null : selectedId);
      };

    return (
        <div className='fixed flex left-72 top-20 w-3/4 border-b pb-4'>
          <p className="mr-4 font-bold pt-2.5">Выберите категорию:</p>
          <select className='border rounded-2xl pl-2 py-2 pr-24 h-10' value={selectedCategory || ""} onChange={handleSelectChange}>
            <option value={0}>Все</option>
            {categories && categories.map((category: ICategory) => (
              <option key={category.id_category} value={category.id_category}>
                {category.name}
              </option>
            ))}
          </select>
        <NewArticleForm selectedCategory={selectedCategory}/>
      </div>
    )
}

export default SelectedNewArticle

