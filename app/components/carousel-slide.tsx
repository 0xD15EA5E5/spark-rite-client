import { StrapiImage } from "./strapi-image";

interface SlideProps{
    index: number;
    activeIndex: number;
    id: number | null;
    title: string | null;
    subheading: string | null;
    image: {
        url: string;
        alternativeText: string;
    }
}

export function Slide({
    index,
    activeIndex,
    id,
    title,
    subheading,
    image,
    }: Readonly<SlideProps>) {
    var classes = "slides transition-left duration-300 absolute block w-full h-120 overflow-hidden top-0 carousel-item";
    return (
        <div className={(index === activeIndex ? 'slides active z-9 '+classes : 'inactive '+classes) } >
            <div className="absolute block w-full h-full z-1 bg-slate-950 opacity-30"></div>
            <div className="absolute block top-40 z-9 px-20">
                <h2>{title}</h2>
                <h3>{subheading}</h3>
            </div>
            <StrapiImage src={image.url} alt={image.alternativeText} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"/>
        </div>
    )
};