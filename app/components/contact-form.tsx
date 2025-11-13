import { useState } from 'react';

interface ContactData{
    name: string;
    email: string;
    phone: string;
    message: string;
}

export function ContactForm({

}){

    const [msgsent, setMsgSent] = useState(false);

    async function contact(formData:any){
        const name = formData.get("name");
        const email = formData.get("email");
        const phone = formData.get("phone");
        const message = formData.get("message");

        const BASE_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";
        const path = "/api/email";
        const url = new URL(path, BASE_URL);
        var response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                phone: phone,
                message: message,
            })
        })
        var json = await response.json();
        if(json.success = 'ok'){
            setMsgSent(true);
            setTimeout(function(){
                setMsgSent(false);
            },3000);
        }
    }

    return (
        <>
            <div className={(msgsent ? '' : 'hidden') + " fixed p-5 px-20 bg-green-400 top-1/2 left-1/2 -translate-1/2 text-neutral-50 text-center text-3xl"}>
                <p>Message sent</p>
            </div>
            <form action={contact} className="grid px-10 md:px-20 lg:px-40 grid-cols-2 pb-20 gap-4">
                <input name="name" placeholder="Name" className="h-10 border-2 border-yellow-400 p-2 col-span-full"/>
                <input name="email" placeholder="Email" className="h-10 border-2 border-yellow-400 p-2 col-span-full sm:col-span-1"/>
                <input name="phone" placeholder="Phone" className="h-10 border-2 border-yellow-400 p-2 col-span-full sm:col-span-1"/>
                <textarea name="message" placeholder="Message" className="h-40 border-2 border-yellow-400 p-2 col-span-2"/>
                <div className="col-span-2">
                    <button type="submit" className="border-2 border-yellow-400 hover:bg-yellow-400 hover:text-neutral-50 py-1 sm:py-2 sm:px-8 w-40">SEND</button>
                </div>
            </form>
        </>
    )
}