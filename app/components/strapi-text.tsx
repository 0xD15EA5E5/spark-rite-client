import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';

interface StrapiTextProps {
    content: {};
}

export function StrapiText({
    content,
}: Readonly<StrapiTextProps>) {
    return <BlocksRenderer content={content} />;
}