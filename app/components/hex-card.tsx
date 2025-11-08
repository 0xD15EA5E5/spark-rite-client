import { StrapiImage } from "./strapi-image";
import { Button } from "./button";

interface CardProps{
    Text: {};
    ButtonText: string | null;
    ButtonURL: string | undefined;
    image: {
        url: string;
        alternativeText: string;
    }
}

export function Hexcard({
    Text,
    ButtonText,
    ButtonURL,
    image,
}: Readonly<CardProps>) {
    return(
        <>
            <div className="hexcard py-10 px-40 mx-auto grid grid-cols-2 gap-4">
                <div>
                    { ButtonURL ? <Button url={ButtonURL} label={ButtonText} classes={null}/> : ''}
                </div>
                <div>
                    <StrapiImage src={image.url} alt={image.alternativeText} className={"mx-auto mb-5"}/>
                </div>
            </div>
        </>
    )
}