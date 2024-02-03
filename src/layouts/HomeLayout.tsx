import Footer from "@/components/HomeSite/Footer";
import Header from "@/components/HomeSite/Header";

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}