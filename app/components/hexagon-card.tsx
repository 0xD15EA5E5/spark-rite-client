import { StrapiImage } from "./strapi-image";

export interface HexagonProps {
    text: string;
    button: string;
    buttonurl: string;
    // image: {
    //     url: string;
    //     alternativeText: string;
    // };
}

export function HexagonCard({
    text,
    button,
    buttonurl,
    // image,
}: Readonly<HexagonProps>) {
    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
                {text}
            </div>
        </div>
    )
}