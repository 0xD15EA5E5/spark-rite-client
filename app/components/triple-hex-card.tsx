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
            <div className="triplehexcard py-5 sm:py-10 px-10 ms:px-20 lg:px-40 mx-auto grid grid-cols-2 gap-4 bg-yellow-400 mt-10">
                <div className="flex items-center justify-center flex-col col-span-full sm:col-span-1 ">
                    <StrapiText content={content.Text} {...content.Text} />
                    { content.ButtonURL ? <Button url={content.ButtonURL} label={content.ButtonText} classes={"mt-8 hover:border-slate-900 hover:bg-slate-900 hover:text-yellow-400"}/> : ''}
                </div>
                <div className="grid grid-cols-2 gap-4 col-span-full sm:col-span-1 ">
                    { content.Images.map((heximage: HexImage, index)=>(
                        <div key={index} className={ index == 0 ? 'row-span-2 content-center content-between': ''}>
                            <StrapiImage src={heximage.url} alt={heximage.alternativeText} className={ (index == 0 ? " hexagon sm:mx-auto sm:mb-5 sm:-mr-7" : "hexagon sm:mx-auto -ml-8 sm:mb-5 lg:-ml-0 xl:-ml-10")}/>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}