import { StrapiImage } from "./strapi-image";

interface BannerProps{
    text: string;
    src: string;
    alt: string;
    className?: string;
}

export function Banner({
    text,
    src,
    alt,
    className,
    }: Readonly<BannerProps>) {
    return (
        <div className={"relative w-full h-60 overflow-hidden "+(className ? className : "")}>
            <h1 className="z-99 text-neutral-50 absolute top-1/2 px-20 text-5xl -translate-y-1/2">{text}</h1>
            <StrapiImage src={src} alt={alt} className="absolute block w-full h-full object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
            <div className="absolute block w-full h-full bg-slate-950 opacity-40 top-0 left-0"></div>
        </div>
    )
}