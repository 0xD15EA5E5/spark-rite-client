interface ButtonProps{
    url: string | undefined,
    label: string | null,
    classes: string | null,
}

export function Button({
    url,
    label,
    classes,
}: Readonly<ButtonProps>){
    return (
        <a href={url}>
            <div className={ classes+" border-4 w-auto inline-block py-1 px-4 sm:py-2 sm:px-8"}>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl uppercase">{label}</p>
                </div>
        </a>
    )
}