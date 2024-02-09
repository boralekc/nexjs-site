import { updateArticle } from "@/actions/ActionArticle";
import ButtonNewItems from "@/components/Settings/Buttons/ButtonNewItems";
import { IArticle } from "@/interfaces/IArticle";
import React from "react";

interface EditArticleProps {
    oneArticle: IArticle;
}

const EditArticleForm: React.FC<EditArticleProps> = ({ oneArticle }) => {

    return (
        <form name='updateArticle' action={updateArticle}>
            <div className='fixed left-72 h-3/4 w-3/4 top-24 overflow-auto shadow-2xl rounded-xl'>
                <div className="mt-6 mx-6">
                    <input type='hidden' required name='id_article' value={oneArticle.id_article} />
                    <input type='hidden' required name='id_category' value={oneArticle?.id_category || ''} />
                </div>
                <div className="mt-6 mx-6">
                    <div className="pb-4 font-bold">Заголовок статьи{oneArticle?.id_category || ''}</div>
                    <textarea required name='title' className="border w-full rounded-md">{oneArticle?.title || 'Введите заголовок'}</textarea>
                </div>
                <div className="mt-6 mx-6">
                    <div className="pb-4 font-bold">Текст статьи</div>
                    <textarea required name='content' className="border w-full h-56 rounded-md" >{oneArticle?.content || 'Введите текст статьи'}</textarea>
                </div>
                <ButtonNewItems address={'/settings/articles'} />
            </div>
        </form>
    );
};

export default EditArticleForm;
