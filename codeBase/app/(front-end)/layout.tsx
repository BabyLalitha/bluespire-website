import Footer from "../Footer"
import NavBar from "../NavBar"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section>
        {/* <NavBar /> */}
        {children}
        {/* <Footer /> */}
    </section>
}