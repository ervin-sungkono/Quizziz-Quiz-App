import { ReactNode } from "react"
import Navbar from "../common/Navbar"
import Footer from "../common/Footer"

interface Props {
    children?: ReactNode,
    hideNavbar?: boolean,
    hideFooter?: boolean
}

export default function DefaultLayout({ 
    children, 
    hideNavbar = false,
    hideFooter = false
} : Props) {
    return(
        <div className="flex flex-col fixed top-0 left-0 bottom-0 right-0 bg-white dark:bg-dark-blue pt-20">
            { !hideNavbar && <Navbar/> }
            <main className="container w-full max-h-full">
                {children}
            </main>
            { !hideFooter && <Footer/> }
        </div>
    )
}