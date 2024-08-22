"use client"
import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

interface NavbarLink{
    label: string,
    url: string,
    requireAuth: boolean
}

export default function Navbar(){
    const links: Array<NavbarLink> = [
        {
            label: "Home",
            url: "/",
            requireAuth: false
        },
        {
            label: "Quiz",
            url: "/quiz",
            requireAuth: true
        },
        {
            label: "Statistics",
            url: "/statistics",
            requireAuth: true
        },
        {
            label: "Leaderboard",
            url: "/leaderboard",
            requireAuth: false
        }
    ]

    const [mounted, setMounted] = useState(false)
    const { theme } = useTheme()

    useEffect(() => setMounted(true), [])

    const renderNavbarLogo = () => {
        return mounted && (theme === 'light' ? 
        <Image
            width={100}
            height={28}
            src={"/quizziz-logo.png"}
            alt="quizziz-logo"
        /> :
        <Image
            width={100}
            height={28}
            src={"/quizziz-logo-white.png"}
            alt="quizziz-logo"
        />)
    }

    return(
        <nav className="fixed w-full top-0 left-0 z-fixed bg-sky-blue dark:bg-darker-blue">
            <div className="container flex items-center h-20">
                <Link href={"/"}>
                    {renderNavbarLogo()}
                </Link>
                <div className="flex ml-auto items-center h-full">
                    {links.map(({label, url}, index)=> (
                        <Link 
                            key={`${label}-${index}`} 
                            href={url}
                            className="relative flex items-center h-full font-semibold text-darker-blue dark:text-sky-blue hover:text-light-orange dark:hover:text-primary-orange transition-colors duration-300 px-5 before:absolute before:w-full before:rounded-full before:scale-x-0 before:origin-left before:h-1 before:bg-light-orange dark:before:bg-primary-orange before:bottom-0 before:left-0 hover:before:scale-x-100 before:transition-transform before:duration-300"
                        >
                            <p>{label}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}