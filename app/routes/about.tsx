import type { Route } from "./+types/about";
import qs from "qs";
import { Banner } from "~/components/banner";
import { HexContent } from "~/components/hex-content-block";
import { ContentBlock } from "~/components/content-block";
import Layout from "~/components/layout";

interface LoaderData {
    header: {
        url: string;
        alternativeText: string;
    };
    intro: [];
    lowercontent: {};
    title: string;
}

export async function loader({params}: Route.LoaderArgs) {
    const BASE_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";
    const path = "/api/about";
    const url = new URL(path, BASE_URL);

    url.search = qs.stringify({
        populate: {
            Header: {
                populate: '*',
            },
            Intro: {
                populate: '*',
            }
        }
    })
    const aboutdata = await fetch(url.href);
    var data = await aboutdata.json();
    var headerdata = data.data.Header;
    var introdata = data.data.Intro;
    var lowercontentdata = data.data.LowerContent;
    return {header: headerdata as LoaderData, intro: introdata, lowercontent: lowercontentdata, title: data.data.title};
}

export default function About({loaderData}:{loaderData: LoaderData}){
    if (!loaderData) return <p>No data found</p>;
    return (
        <Layout>
            <Banner src={loaderData.header.url} alt={loaderData.header.alternativeText} className="" text={loaderData.title}/>
            <HexContent content={loaderData.intro}/>
            <ContentBlock content={loaderData.lowercontent} classes=""/>
        </Layout>
    );
}