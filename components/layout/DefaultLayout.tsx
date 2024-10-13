import { ReactNode } from "react"
import Navbar from "@/components/common/Navbar"
import Footer from "@/components/common/Footer"

interface DefaultLayoutProps {
    children?: ReactNode,
    hideNavbar?: boolean,
    hideFooter?: boolean
}

export default function DefaultLayout({ 
    children, 
    hideNavbar = false,
    hideFooter = false
} : DefaultLayoutProps) {
    return(
        <div className="flex flex-col overflow-auto fixed top-0 left-0 bottom-0 right-0 bg-white dark:bg-dark-blue pt-20">
            { !hideNavbar && <Navbar/> }
            <main className="w-full">
                {children}
            </main>
            { !hideFooter && <Footer/> }
        </div>
    )
}