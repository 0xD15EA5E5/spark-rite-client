import type { Route } from "./+types/_index";
import Layout from "~/components/layout";
import { HexContent } from "~/components/hex-content-block";
import { TripleHexcard } from "~/components/triple-hex-card";

import qs from "qs";
import { Carousel } from "~/components/carousel";

interface LoaderData {
    paneldata: [];
    content: [];
    triplehex: {};
}

export async function loader({params}: Route.LoaderArgs) {
    const BASE_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";
    const path = "/api/home";
    const url = new URL(path, BASE_URL);

    url.search = qs.stringify({
        populate: {
            Panel: {
              populate: '*',
            },
            HexagonBlock: {
              populate: '*',
            },
            TripleHexagonBlock: {
              populate: '*',
            },
        }
    })

    const paneldata = await fetch(url.href);
    var data = await paneldata.json();
    var hexdata = data.data.HexagonBlock;
    var triplehex = data.data.TripleHexagonBlock;
    data = data.data.Panel;
    
    return {paneldata: data as LoaderData, content: hexdata, triplehex: triplehex};
}

export default function Home({loaderData}:{loaderData: LoaderData}){
    if (!loaderData) return <p>No data found</p>;
    return (
        <>
          <Layout>
            <Carousel slidedata={loaderData.paneldata}/>
            <HexContent content={loaderData.content}/>
            <TripleHexcard content={loaderData.triplehex}/>
            {/* <TripleHexcard Text={loaderData.triplehex.Text} ButtonText={loaderData.triplehex.ButtonText} ButtonURL={loaderData.triplehex.ButtonURL} image={loaderData.triplehex.Images}/> */}
          </Layout>
        </>
    );
}