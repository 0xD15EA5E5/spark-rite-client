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
            <div className="hexcard py-10 px-40 mx-auto">
                <h1>HEX CARDS</h1>
                { ButtonURL ? <Button url={ButtonURL} label={ButtonText} classes={null}/> : ''}
            </div>
        </>
    )
}