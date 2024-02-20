'use client'
import { ICategory } from "@/interfaces/ICategory"
import { useState } from "react";
import { IArticle } from "@/interfaces/IArticle";
import EditArticleForm from "../Form/EditArticleForm";

interface SelectedEditArticleProps {
  oneArticle: IArticle;
  categories: ICategory[];
}

const SelectedEditArticle: React.FC<SelectedEditArticleProps> = ({ oneArticle, categories }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(oneArticle?.id_category || null);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(event.target.value, 10);
    setSelectedCategoryId(selectedId === 0 ? null : selectedId);
  };

  return (
    <div className='fixed flex left-72 top-20 w-3/4 border-b pb-4'>
      <div className="flex">
        <p className="mr-4 font-bold pt-2.5">Выберите категорию:</p>
        <select className='border rounded-2xl pl-2 py-2 pr-24 h-10' value={selectedCategoryId || ""} onChange={handleSelectChange}>
        <option value={0}>Нет категории</option>
          {categories && categories.map((category: ICategory) => (
            <option key={category.id_category} value={category.id_category}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <EditArticleForm oneArticle={{ ...oneArticle, id_category: selectedCategoryId }} />
      </div>
    </div>
  );
}

export default SelectedEditArticle;









