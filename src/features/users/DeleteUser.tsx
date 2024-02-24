import { deleteUser } from "@/actions/ActionUser"
import DeleteButton from "@/shared/DeleteButton"

const DeleteUser = ({ user_id }: { user_id: number }) => {
    return (
        <div>
            <form name='user_id' action={deleteUser}>
                <input type='hidden' name='user_id' value={user_id} />
                <DeleteButton buttonLabel='Delete' />
            </form>
        </div>
    )
}

export default DeleteUser