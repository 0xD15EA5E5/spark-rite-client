import { StrapiText } from "./strapi-text";

interface ContentBlockProps{
    content: {};
}

export function ContentBlock({
    content,
}: Readonly<ContentBlockProps>) {
    return (
        <div className="content-block pb-10 px-40">
            <StrapiText content={content} />
        </div>
    )
}