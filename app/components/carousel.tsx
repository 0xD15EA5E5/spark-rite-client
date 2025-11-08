import { useEffect, useState } from "react";
import { Slide } from "./carousel-slide";

interface CarouselProps {
    slidedata: []
}

interface Panel {
    id: number
    Title: string
    subheading: string
    Enabled: boolean
    Image: {
        url: string;
        alternativeText: string;
    };
}

export function Carousel({
    slidedata
}: Readonly<CarouselProps>){
    const [activeIndex, setActiveIndex] = useState(0);
    const len = slidedata.length-1;

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
            console.log("setting index");
        }, 5000);
        return () => clearInterval(interval);
    }, [activeIndex]);
    return (
        <div className="w-full relative carousel h-121 border-b-2 border-yellow-400">
             {slidedata.map((panel : Panel, index)=>(
                <Slide key={index} index={index} activeIndex={activeIndex} id={panel.id} title={panel.Title} subheading={panel.subheading} image={panel.Image}/>
            ))}
        </div>
    )
};