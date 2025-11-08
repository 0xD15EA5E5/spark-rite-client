import { Hexcard } from "./hex-card";

interface HexProps {
    content: []
}

export function HexContent({
    content
}:Readonly<HexProps>){
    return(
        <>
        {content.map((hexdata, index)=>(
            <Hexcard key={index} Text={hexdata.Text} ButtonText={hexdata.ButtonText} ButtonURL={hexdata.ButtonURL} image={hexdata.Image} />
        ))}
        </>
    );
}