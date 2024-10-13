"use client"
import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import LinkButton from "./buttons/LinkButton"

import { 
    BsSunFill as SunIcon,
    BsMoonStarsFill as MoonIcon
} from "react-icons/bs"

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

    const [hamburgerState, setHamburgerState] = useState(false)
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    const toggleTheme = () => theme === 'light' ? setTheme('dark') : setTheme('light')

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

    const renderToggleThemeButton = (type = "default") => {
        return mounted && (
        <div className={`w-16 h-8 py-1 px-2 bg-blue-100 dark:bg-gray-700 rounded-full cursor-pointer ${type === 'mobile' ? "mt-4 block lg:hidden" : "hidden lg:block"} `} onClick={() => toggleTheme()}>
            <div className="w-6 h-6 flex justify-center items-center bg-primary-orange dark:bg-light-blue rounded-full transition-transform ease-in-out duration-500 translate-x-0 dark:translate-x-full">
                {theme === 'light' ? <SunIcon className="text-white"/> : <MoonIcon className="text-darker-blue"/>}
            </div>
        </div>)
    }

    return(
        <nav className="fixed w-full top-0 left-0 z-fixed bg-blue-200 dark:bg-darker-blue">
            <div className="container flex items-center h-20">
                <div className="flex gap-8 items-center">
                    <Link href={"/"}>
                        {renderNavbarLogo()}
                    </Link>
                    {renderToggleThemeButton()}
                </div> 
                <div className={`nav-menu bg-blue-200 dark:bg-darker-blue flex ml-auto items-center h-full ${hamburgerState ? 'active' : ''}`}>
                    {links.map(({label, url}, index)=> (
                        <Link 
                            key={`${label}-${index}`} 
                            href={url}
                            className="relative flex items-center w-full py-4 lg:py-0 lg:h-full font-semibold text-darker-blue dark:text-sky-blue hover:text-light-orange dark:hover:text-primary-orange transition-colors duration-300 px-5 before:absolute before:w-full before:rounded-full before:scale-x-0 before:origin-left before:h-1 before:bg-light-orange dark:before:bg-primary-orange before:bottom-0 before:left-0 hover:before:scale-x-100 before:transition-transform before:duration-300"
                        >
                            <p className="w-full text-center">{label}</p>
                        </Link>
                    ))}
                    <LinkButton href={"/login"} {...{className:"mt-4 lg:mt-0 lg:ml-4"}}>
                        Login
                    </LinkButton>
                    {renderToggleThemeButton("mobile")}
                </div>
                <button
                    className={`ml-auto hamburger-btn ${hamburgerState ? 'active': ''}`}
                    onClick={() => setHamburgerState(!hamburgerState)}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
            </div>
            
        </nav>
    )
}