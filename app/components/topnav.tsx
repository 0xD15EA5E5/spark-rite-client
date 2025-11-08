import { StrapiImage } from "./strapi-image";
import qs from "qs";
//import { Navbar, NavbarDivider, NavbarItem, NavbarLabel, NavbarSection, NavbarSpacer } from '@/components/navbar'

interface Link {
    url: string,
    text: string,
}

interface LoaderData {
    data: [];
}

export async function loader() {
    const BASE_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";
    const path = "/api/global";
    const url = new URL(path, BASE_URL);

    url.search = qs.stringify({
        populate: '*'
    })

    const globaldata = await fetch(url.href);
    var data = await globaldata.json();
    return {data: data as LoaderData};
}

export default function Topnav({
    
}){
    var links: Link[] = [
        {url: "/", text: "Home"},
        {url: "/about", text: "About",},
        {url: "/services", text: "Services",},
        {url: "/contact", text: "Contact",},
    ];

    return (
        <div className="grid grid-cols-4 z-99 bg-white relative">
            <StrapiImage className="col-span-2 h-20 p-2" src="/uploads/logo_73ef731f0d.png" alt=""/>
            <div className="grid grid-rows-subgrid col-span-2 grid-cols-4 nav top-0 z-99">
                {links.map((link: Link, index) => 
                    <a className="col-span-1 py-7" href={link.url} key={index}>
                        <div className="text-slate-900"><p className="text-center">{link.text}</p></div>
                    </a>
                )}
            </div>
        </div>
    );
};