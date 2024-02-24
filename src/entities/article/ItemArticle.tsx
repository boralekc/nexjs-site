import { IArticle } from "@/interfaces/IArticle";
import EditButton from "@/shared/EditButton";

import { ICategory } from "@/interfaces/ICategory";
import DeleteArticle from "@/features/articles/DeleteArticle";

interface ItemArticleProps {
    article: IArticle;
    categories: ICategory[],
    selectedCategory: number | null;
}

const ItemArticle: React.FC<ItemArticleProps> = ({ article, categories, selectedCategory }) => {
    // Если selectedCategory не равно null, фильтруем статьи по id_category
    if (selectedCategory !== null && article.id_category !== selectedCategory) {
        return null; // Если статья не соответствует выбранной категории, не отображаем ее
    }

    const category = categories.find(category => category.id_category === article.id_category);

    return (
        <div key={article.id_article} className='flex h-16 mt-4 bg-gray-100 rounded-xl shadow-lg p-2 mr-16 ml-auto'>
            <div className='pt-2 pl-2 font-semibold mr-3 w-full'>
            <div className='border-b'>
                {article.title}
            </div>
            <div className='text-xs'>
            Категория: {category ? `${category.name}` : 'Не прикреплен ни к одной категории'}
            </div>
            </div>
            <EditButton itemId={Number(article.id_article)} address='/dashboard/articles/edit/' />
            <DeleteArticle id_article={Number(article.id_article)} />
        </div>
    );
};

export default ItemArticle;
