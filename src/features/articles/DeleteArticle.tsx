import { deleteArticle } from "@/actions/ActionArticle"
import DeleteButton from "@/shared/DeleteButton"

const DeleteArticle = ({ id_article }: { id_article: number }) => {
    return (
        <div>
            <form name='id_article' action={deleteArticle}>
                <input type='hidden' name='id_article' value={id_article} />
                <DeleteButton buttonLabel='Delete' />
            </form>
        </div>
    )
}

export default DeleteArticle