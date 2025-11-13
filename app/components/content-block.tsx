import { StrapiText } from "./strapi-text";

interface ContentBlockProps{
    content: {};
    classes: string;
}

export function ContentBlock({
    content,
    classes,
}: Readonly<ContentBlockProps>) {
    return (
        <div className={classes+" content-block pb-10 px-10 md:px-20 lg:px-40 mt-10 text-base md:text-sm lg:text-base"}>
            <StrapiText content={content} />
        </div>
    )
}