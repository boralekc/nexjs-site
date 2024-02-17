'use client'

import { categoryAPI } from "@/app/api/services/CategoryServices";
import { ICategory } from "@/interfaces/ICategory";
import { useState } from "react";

export default async function Select () {
    const categories = await categoryAPI.getCategory();
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedId = parseInt(event.target.value, 10);
        setSelectedCategory(selectedId === 0 ? null : selectedId);
    };

    return (
    <div className='fixed left-72 h-3/4 w-3/4 top-24 overflow-auto shadow-2xl rounded-xl'>
                <div className="flex mt-6 mx-6 border-b pb-4">
                    <p className="mr-4 font-bold pt-2">Выберите категорию:</p>
                    <select className='border rounded-md pl-2 py-1 pr-24' value={selectedCategory || ""} onChange={handleSelectChange}>
                        <option value={0}>Все</option>
                        {categories && categories.map((category: ICategory) => (
                            <option key={category.id_category} value={category.id_category}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
                </div>
                )
}