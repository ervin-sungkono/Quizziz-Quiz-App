import { ReactNode } from "react"
import Navbar from "../common/Navbar"

interface Props {
    children?: ReactNode,
    hideNavbar?: boolean
}

export default function DefaultLayout({ 
    children, 
    hideNavbar = false 
} : Props) {
    return(
        <div className="flex flex-col fixed top-0 left-0 bottom-0 right-0 bg-dark-blue pt-20">
            { !hideNavbar && <Navbar/> }
            <main className="container w-full max-h-full">
                {children}
            </main>
        </div>
    )
}