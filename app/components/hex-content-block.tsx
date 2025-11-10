import { Hexcard } from "./hex-card";

interface HexProps {
    content: []
}

interface HexData {
    Text: {};
    ButtonText: string | null;
    ButtonURL: string | undefined;
    Image: {
        url: string;
        alternativeText: string;
    }
}

export function HexContent({
    content
}:Readonly<HexProps>){
    return(
        <>
        {content.map((hexdata: HexData, index)=>(
            <Hexcard key={index} index={index} Text={hexdata.Text} ButtonText={hexdata.ButtonText} ButtonURL={hexdata.ButtonURL} image={hexdata.Image} />
        ))}
        </>
    );
}