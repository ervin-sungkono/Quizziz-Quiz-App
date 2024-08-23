import Link from "next/link"
import Button, { ButtonProps } from "./Button"
import { PropsWithoutRef, ReactNode } from "react"

interface LinkButtonProps{
    href: string,
    children: ReactNode,
    buttonProps?: PropsWithoutRef<ButtonProps>
}

export default function LinkButton({ 
    href, 
    children, 
    ...buttonProps 
} : LinkButtonProps){
    return(
        <Link href={href}>
            <Button {...buttonProps}>
                {children}
            </Button>
        </Link>
    )
}