import type { Route } from "../+types/about";
import qs from "qs";
import { Carousel } from "~/components/carousel";

interface Panel {
    id: number
    Title: string
    subheading: string
    Enabled: boolean
    Image: {
        id: number
    };
}

interface LoaderData {
    paneldata: [];
}

export async function loader({params}: Route.LoaderArgs) {
    const BASE_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";
    const path = "/api/home";
    const url = new URL(path, BASE_URL);

    url.search = qs.stringify({
        populate: {
            Panel: {
                populate: '*',
            }
        }
    })

    const paneldata = await fetch(url.href);
    var data = await paneldata.json();
    data = data.data.Panel;
    return {paneldata: data as LoaderData};
}

export default function About({loaderData}:{loaderData: LoaderData}){
    if (!loaderData) return <p>No data found</p>;
    return (
        <Carousel slidedata={loaderData.paneldata}/>
    );
}