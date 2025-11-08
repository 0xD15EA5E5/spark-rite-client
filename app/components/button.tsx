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
            <div className={ classes+" border-4 w-auto inline-block py-2 px-8"}>
                <p className="text-xl uppercase">{label}</p>
                </div>
        </a>
    )
}