import { createArticle } from "@/actions/ActionArticle";
import ButtonNewItems from "@/components/Settings/Buttons/ButtonNewItems";

interface ItemArticleProps {
    selectedCategory: number | null;
}

const NewArticleForm: React.FC<ItemArticleProps> = ({selectedCategory}) => {

    return (
        <form name='newArticle' action={createArticle}>
            <div className='fixed left-72 h-3/4 w-3/4 top-24 overflow-auto shadow-2xl rounded-xl'>
                <div className="mt-16 mx-6">
                    <div className="pb-4 font-bold">Заголовок статьи</div>
                    <textarea required name='title' className="border w-full rounded-md" placeholder='Введите название категории' />
                </div>
                <div className="mt-16 mx-6">
                    <div className="pb-4 font-bold">Текст статьи</div>
                    <textarea required name='content' className="border w-full rounded-md" placeholder='Введите название категории' />
                </div>
                    <input type='hidden' required name='id_category' value={selectedCategory || ''} />
                <div className="flex justify-end w-full pr-6 mt-6">
                    <ButtonNewItems address={'/settings/articles'} />
                </div>
            </div>
        </form>
    )
}

export default NewArticleForm

// 'use client'
// import { articleAPI } from "@/app/lib/services/ArticleServices";
// import { IArticle } from "@/interfaces/IArticle";
// import { ICategory } from "@/interfaces/ICategory";
// import Link from "next/link";
// import { redirect } from "next/navigation";
// import { FormEvent, useState } from "react";

// interface NewArticleProps {
//     categories: ICategory[];
// }

// const NewArticle: React.FC<NewArticleProps> = ({ categories }) => {
//     const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
//     const [articleValue, setArticleValue] = useState({ title: '', content: '', id_category: 0 });


//     const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//         const selectedId = parseInt(event.target.value, 10);
//         setSelectedCategory(selectedId === 0 ? null : selectedId);
//         setArticleValue({ ...articleValue, id_category: selectedId });
//     };

//     const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setArticleValue({ ...articleValue, title: event.target.value });
//     };

//     const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
//         setArticleValue({ ...articleValue, content: event.target.value });
//     };

//     const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         try {
//             const response = await articleAPI.addArticle(articleValue as IArticle);
//             alert('Статья сохранена');

//             // После успешного сохранения статьи получаем ее данные из ответа
//             const newArticleData = await response.json();

//             // Получаем id только что созданной статьи
//             const newArticleId = newArticleData.id; // Предположим, что id доступен таким образом

//             // Выполняем редирект с передачей id статьи
            
//         } catch (error) {
//             console.error('Error adding article:', error);
//         }
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <div className='fixed left-72 h-3/4 w-3/4 top-24 overflow-auto shadow-2xl rounded-xl'>
//                     <div className="flex mt-6 mx-6 border-b pb-4">
//                         <p className="mr-4 font-bold pt-2">Выберите категорию:</p>
//                         <select className='border rounded-md pl-2 py-1 pr-24' value={selectedCategory || ""} onChange={handleSelectChange}>
//                             <option value={0}>Все</option>
//                             {categories && categories.map((category: ICategory) => (
//                                 <option key={category.id_category} value={category.id_category}>
//                                     {category.name}
//                                 </option>
//                             ))}
//                         </select>
//                     </div>

//                     <div className="mt-6 mx-6 ">
//                         <div className="pb-4 font-bold">Заголовок статьи</div>
//                         <input className="border w-full h-8 rounded-md text-gray-400"
//                             type="text"
//                             placeholder="Введите заголовок статьи"
//                             value={articleValue.title}
//                             onChange={handleTitleChange}
//                         />
//                     </div>
//                     <div className="mt-6 mx-6">
//                         <div className="pb-4 font-bold">Текст статьи</div>
//                         <textarea className="border w-full h-44 rounded-md text-gray-400"
//                             placeholder="Введите текст статьи"
//                             value={articleValue.content}
//                             onChange={handleContentChange}
//                         />
//                     </div>
//                     <div className="flex justify-end w-full pr-6 mt-6">
//                         <button type="submit" className='bg-green-400 hover:bg-green-600 text-black text-sm border-blue-700 font-bold py-2 px-4 rounded-xl'>Save</button>
//                         <Link href='/settings/articles' className='bg-orange-400 hover:bg-orange-500 text-black text-sm font-bold py-2 px-4 rounded-xl ml-2'>Cancel</Link>
//                     </div>
//                 </div>
//             </form >
//         </div >
//     )
// }

// export default NewArticle

