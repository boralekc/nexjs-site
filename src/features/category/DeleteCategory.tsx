import { deleteCategory } from "@/actions/ActionCategory"
import DeleteButton from "@/shared/DeleteButton"
import EditButton from "@/shared/EditButton"

const DeleteCategory = ({ id_category }: { id_category: number }) => {
    return (
        <div>
            <form name='id_category' action={deleteCategory}>
                <input type='hidden' name='id_category' value={id_category} />
                <DeleteButton buttonLabel='Delete' />
            </form>
        </div>
    )
}

export default DeleteCategory