import Image from "next/image"
import Link from "next/link"

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

    return(
        <nav className="fixed w-full top-0 left-0 z-fixed bg-darker-blue">
            <div className="container flex items-center justify-between h-20">
                <Image
                    width={100}
                    height={28}
                    src={"/quizziz-logo.png"}
                    alt="quizziz-logo"
                />
                <div className="flex items-center h-full">
                    {links.map(({label, url}, index)=> (
                        <Link 
                            key={`${label}-${index}`} 
                            href={url}
                            className="relative flex items-center h-full text-sm font-medium text-sky-blue hover:text-primary-orange transition-colors duration-300 px-5 before:absolute before:w-full before:rounded-full before:scale-x-0 before:origin-center before:h-1 before:bg-primary-orange before:bottom-0 before:left-0 hover:before:scale-x-100 before:transition-transform before:duration-300"
                        >
                            <p>{label}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}