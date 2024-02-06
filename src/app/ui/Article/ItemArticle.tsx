import { IArticle } from "@/interfaces/IArticle";
import DeleteCategory from "../Category/DeleteCategory";
import EditButton from "@/components/Settings/Buttons/EditButton";

interface EditArticleProps {
    article: IArticle;
}

const ItemArticle: React.FC<EditArticleProps> = ({ article }) => {


    return (
        <div key={article.id_article} className='flex h-16 mt-4 bg-gray-100 rounded-xl shadow-lg p-2 mr-16 ml-auto'>
            <p className='pt-2 pl-2 font-semibold mr-3 w-full'>
                {article.title}
                {article.content}
            </p>
            <EditButton itemId={article.id_article} address='/settings/article/edit/' />
            <DeleteCategory id_article={article.id_article} />
        </div>
    );
};

export default ItemArticle;
