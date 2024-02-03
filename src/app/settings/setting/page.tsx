import NewCategory from "@/app/ui/Category/NewCategory"
import EditSettings from "@/app/ui/Settings/Settings"
import SettingsLayout from "@/layouts/SettingsLayout"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Settings',
    description: '',
  }

const SettingPage = () => {
    return (
        <html lang='en'>
            <body>
                <SettingsLayout>
                    <EditSettings />
                </SettingsLayout>
            </body>
        </html>
    )
}

export default SettingPage