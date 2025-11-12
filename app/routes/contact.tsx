import type { Route } from "./+types/contact";
import qs from "qs";
import { Banner } from "~/components/banner";
import { ContentBlock } from "~/components/content-block";
import { ContactForm } from "~/components/contact-form";
import Layout from "~/components/layout";

interface LoaderData {
    header: {
        url: string;
        alternativeText: string;
    };
    content: {};
    title: string;
}

export async function loader({params}: Route.LoaderArgs) {
    const BASE_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";
    const path = "/api/contact";
    const url = new URL(path, BASE_URL);

    url.search = qs.stringify({
        populate: {
            Header: {
                populate: '*',
            },
        }
    })
    const aboutdata = await fetch(url.href);
    var data = await aboutdata.json();
    var headerdata = data.data.Header;
    var content = data.data.Content;
    return {header: headerdata as LoaderData, content: content, title: data.data.Title};
}

export default function Contact({loaderData}:{loaderData: LoaderData}){
    if (!loaderData) return <p>No data found</p>;
    return (
        <Layout>
            <Banner src={loaderData.header.url} alt={loaderData.header.alternativeText} className="" text={loaderData.title}/>
            <ContentBlock content={loaderData.content} classes="pt-10"/>
            <ContactForm/>
        </Layout>
    );
}