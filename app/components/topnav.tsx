import { StrapiImage } from "./strapi-image";
import qs from "qs";
import { useState } from "react";

interface GlobalLoaderData {
    globaldata: [];
}

interface Link {
    url: string,
    text: string,
}

export async function globalloader() {
    const BASE_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";
    const path = "/api/global";
    const url = new URL(path, BASE_URL);

    url.search = qs.stringify({
        populate: '*'
    })

    const globaldata = await fetch(url.href);
    var data = await globaldata.json();
    return {globaldata: data as GlobalLoaderData};
}

export default function Topnav({
    globaldata,
}: Readonly<GlobalLoaderData>){
    var links: Link[] = [
        {url: "/", text: "Home"},
        {url: "/about", text: "About",},
        {url: "/services", text: "Services",},
        {url: "/contact", text: "Contact",},
    ];

    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <div className="grid grid-cols-4 z-99 bg-white relative">
            <div className="col-span-3 sm:col-span-2 h-20 p-2 flex items-center">
                <a href="/" className="flex items-center h-20">
                    <StrapiImage className="h-3/4 md:h-full" src="/uploads/logo_73ef731f0d.png" alt=""/>
                    <div className="ml-2 text-xs sm:text-sm md:text-base">
                        {/* {globaldata} */}
                        <p>SPARK RITE TOOLS</p>
                        <p>PETROL TOOL SERVICE & REPAIR</p>
                    </div>
                </a>
            </div>
            <div className="hidden sm:grid grid-rows-subgrid col-span-2 grid-cols-4 nav top-0 z-99">
                {links.map((link: Link, index) => 
                    <a className="col-span-1 py-7" href={link.url} key={index}>
                        <div className="text-slate-900"><p className="text-center">{link.text}</p></div>
                    </a>
                )}
            </div>
            <div className="grid sm:hidden col-span-1 justify-center">
                <div className="flex flex-col gap-y-2 my-auto" onClick={() => setIsNavOpen((prev) => !prev)}>
                    <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                    <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                    <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                </div>
            </div>
            <div className={(isNavOpen ? 'flex' : 'hidden') + ' fixed w-full h-full bg-neutral-50 z-99 flex-col justify-evenly'} onClick={() => setIsNavOpen((prev) => !prev)}>
                <div className="text-2xl text-grey-600 absolute animate-pulse right-5 top-5">X</div>
                {links.map((link: Link, index) => 
                    <a className="" href={link.url} key={index}>
                        <div className="text-slate-900"><p className="text-center">{link.text}</p></div>
                    </a>
                )}
            </div>
        </div>
    );
};