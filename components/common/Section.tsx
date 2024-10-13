import { ReactNode } from "react"

interface SectionProps extends React.ComponentProps<"section">{
    size?: string,
    color?: keyof ColorOptions,
    children?: ReactNode
}

interface ColorOptions{
    primary: string,
    secondary: string
}

const colorOptions : ColorOptions = {
    primary: 'bg-white text-darker-blue dark:bg-dark-blue dark:text-white',
    secondary: 'bg-sky-blue text-dark-blue dark:bg-light-blue dark:text-darker-blue'
}

export default function Section({ size = 'normal', color = 'primary', children, ...props } : SectionProps){
    if(size === "normal") return(
        <div className={`${colorOptions[color]}`}>
            <section {...props} className={`container md:py-12 py-6 ${props.className}`}>
                {children}
            </section>
        </div>
        
    )
    else if(size === "large") return(
        <div className={`${colorOptions[color]}`}>
            <section {...props} className={`container md:py-16 py-8 ${props.className}`}>
                {children}
            </section>
        </div>
    )
}