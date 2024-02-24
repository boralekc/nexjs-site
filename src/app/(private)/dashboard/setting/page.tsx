import EditSettings from "@/features/settings/Settings"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Settings',
    description: '',
  }

const SettingPage = () => {
    return (
        <EditSettings />
    )
}

export default SettingPage