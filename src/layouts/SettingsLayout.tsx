import SettingsPanel from "@/components/Settings/SettingsPanel";

export default function SettingsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <body className="text-gray-800">
                <SettingsPanel />
                {children}
            </body>
        </html>
    )
}