import Link from "next/link"
import { ReactNode } from "react"
import { 
    RiGithubFill as GithubIcon, 
    RiInstagramFill as InstagramIcon,
    RiLinkedinBoxFill as LinkedInIcon
} from "react-icons/ri"

import { 
    IoLogoVercel as VercelLogo,
    IoLogoFirebase as FirebaseLogo
} from "react-icons/io5"

interface SocialProps{
    url: string,
    iconComponent: ReactNode
}

export default function Footer(){
    const SocialLink = ({ url, iconComponent }: SocialProps) => {
        return(
            <Link href={url} className="dark:text-white text-darker-blue hover:text-light-orange dark:hover:text-primary-orange transition-colors duration-300">
                {iconComponent}
            </Link>
        )
    }

    return (
        <footer className="bg-blue-200 dark:bg-darker-blue">
            <div className="container flex flex-col gap-8 items-center py-8">
                <div className="w-full flex justify-between">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2 dark:text-white text-darker-blue">
                            <p className="uppercase text-sm">Made By</p>
                            <p className="text-lg font-semibold">Ervin Cahyadinata Sungkono</p>
                        </div>
                        <div className="flex gap-4">
                            <SocialLink 
                                url="https://www.linkedin.com/in/ervin-cahyadinata-sungkono"
                                iconComponent={<LinkedInIcon size={32}/>}
                            />
                            <SocialLink 
                                url="https://github.com/ervin-sungkono"
                                iconComponent={<GithubIcon size={32}/>}
                            />
                            <SocialLink 
                                url="https://www.instagram.com/ervin.cs_09"
                                iconComponent={<InstagramIcon size={32}/>}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="uppercase text-sm">Powered By</p>
                        <div className="flex gap-4">
                            <SocialLink
                                url="https://vercel.com/"
                                iconComponent={<VercelLogo size={32}/>}
                            />
                            <SocialLink
                                url="https://firebase.google.com/"
                                iconComponent={<FirebaseLogo size={32}/>}
                            />
                        </div>
                    </div>
                </div>
                <div className="text-sm text-darker-blue dark:text-white">Copyright © Quizziz 2024, All Rights Reserved</div>
            </div>
        </footer>
    )
}