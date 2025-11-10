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
            <div className="hexcard py-10 px-40 mx-auto grid grid-cols-2 gap-4">
                <div className="flex justify-center flex-col">
                    <StrapiText content={Text} {...Text} />
                    { ButtonURL ? <Button url={ButtonURL} label={ButtonText} classes={"mt-8 border-yellow-400 hover:bg-yellow-400 hover:text-neutral-50"}/> : ''}
                </div>
                <div className={((index+1) % 2 === 0 ? 'order-first' : '')}>
                    <StrapiImage src={image.url} alt={image.alternativeText} className={"hexagon mx-auto mb-5"}/>
                </div>
            </div>
        </>
    )
}