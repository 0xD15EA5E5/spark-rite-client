import { StrapiImage } from "./strapi-image";
import { StrapiText } from "./strapi-text";
import { Button } from "./button";

interface CardProps{
    index: number;
    Text: {};
    ButtonText: string | null;
    ButtonURL: string | undefined;
    image: {
        url: string;
        alternativeText: string;
    }
}

export function Hexcard({
    index,
    Text,
    ButtonText,
    ButtonURL,
    image,
}: Readonly<CardProps>) {
    return(
        <>
            <div className="hexcard pt-5 px-10 md:px-20 lg:px-40 mx-auto grid grid-cols-2 gap-4">
                <div className="flex col-span-full sm:col-span-1 justify-center flex-col text-xs md:text-sm lg:text-base">
                    <StrapiText content={Text} {...Text} />
                    { ButtonURL ? <Button url={ButtonURL} label={ButtonText} classes={"mt-8 border-yellow-400 hover:bg-yellow-400 hover:text-neutral-50"}/> : ''}
                </div>
                <div className={((index+1) % 2 === 0 ? 'col-span-full sm:col-span-1 sm:order-first' : 'col-span-full py-1 px-4 sm:col-span-1')}>
                    <StrapiImage src={image.url} alt={image.alternativeText} className={"hexagon mx-auto"}/>
                </div>
            </div>
        </>
    )
}