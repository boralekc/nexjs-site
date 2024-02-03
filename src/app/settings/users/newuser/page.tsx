import NewUser from "@/app/ui/Users/NewUser"
import SettingsLayout from "@/layouts/SettingsLayout"

const NewUsersPage = () => {
    return (
        <html lang='en'>
            <body>
                <SettingsLayout>
                    <NewUser />
                </SettingsLayout>
            </body>
        </html>
    )
}

export default NewUsersPage