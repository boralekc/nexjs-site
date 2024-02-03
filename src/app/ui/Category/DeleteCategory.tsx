import { deleteCategory } from "@/actions/ActionCategory"
import { ICategory } from "@/interfaces/ICategory"


const DeleteCategory = ({id_category}: {id_category: number}) => {
    return (
        <form name='id_category' action={deleteCategory}>
            <input type='hidden' name='id_category' value={id_category} />
            <button className='bg-orange-400 hover:bg-orange-500 text-black text-sm font-bold py-2 px-4 rounded-xl'>Delete</button>
        </form>

    )
}

export default DeleteCategory