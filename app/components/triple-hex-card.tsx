import { StrapiImage } from "./strapi-image";
import { StrapiText } from "./strapi-text";
import { Button } from "./button";

interface CardProps{
    content: {
        ButtonText: string,
        ButtonURL: string,
        Text: {},
        Images: [],
    };
}

interface HexImage{
    url: string;
    alternativeText: string;
}

export function TripleHexcard({
    content,
}: Readonly<CardProps>) {
    return(
        <>
            <div className="triplehexcard py-10 px-40 mx-auto grid grid-cols-2 gap-4 bg-yellow-400">
                <div className="flex items-center justify-center flex-col">
                    <StrapiText content={content.Text} {...content.Text} />
                    { content.ButtonURL ? <Button url={content.ButtonURL} label={content.ButtonText} classes={"mt-8 hover:border-slate-900 hover:bg-slate-900 hover:text-yellow-400"}/> : ''}
                </div>
                <div className="grid grid-cols-2 gap-4">
                    { content.Images.map((heximage: HexImage, index)=>(
                        <div key={index} className={ index == 0 ? 'row-span-2 content-center content-between': ''}>
                            <StrapiImage src={heximage.url} alt={heximage.alternativeText} className={ (index == 0 ? " hexagon mx-auto mb-5 -mr-7" : "hexagon mx-auto mb-5 -ml-10")}/>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}