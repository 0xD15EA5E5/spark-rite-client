import type { Route } from "./+types/services";
import qs from "qs";
import { Carousel } from "~/components/carousel";
import Layout from "~/components/layout";

interface LoaderData {
    paneldata: [];
    content: [];
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
            }
        }
    })

    const paneldata = await fetch(url.href);
    var data = await paneldata.json();
    var hexdata = data.data.HexagonBlock;
    data = data.data.Panel;
    
    return {paneldata: data as LoaderData, content: hexdata};
}

export default function Home({loaderData}:{loaderData: LoaderData}){
    if (!loaderData) return <p>No data found</p>;
    return (
        <>
          <Layout>
            <Carousel slidedata={loaderData.paneldata}/>
          </Layout>
        </>
    );
}