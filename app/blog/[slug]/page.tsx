import { fullBlog } from "@/lib/inferface";
import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import {PortableText} from "@portabletext/react";


export const revalidate= 30;

async function getData(slug: string) {
    const query = `*[_type == 'blog' && slug.current == '${slug}'] {
  "currentSlug": slug.current,
  title,
    content,
    titleImage
}[0]`

    const data = await client.fetch(query);
    return data;
}



export default async function BlogArticle({params}: {params: {slug: string}}) {

    const data: fullBlog= await getData(params.slug);

    return (
        <div className="text-center mt-7">
            <h1>
                <span className="block font-bold text-base text-center text-primary tracking-wide uppercase">
                    Faaiz Amir - Blog
                </span>
                <span className="font-bold text-3xl mt-2 tracking-tight leading-8 sm:text-4xl">
                    {data.title}
                </span>
            </h1>
            <Image src={urlFor(data.titleImage).url()} alt="Blog Image"width={800} height={800} priority className="rounded-lg object-cover mt-8 mx-auto border" />

            <div className="mt-16 text-left mx-auto prose prose-violet prose-headings:text-2xl prose-lg dark:prose-invert">
                <PortableText value={data.content}/>
            </div>
        </div>
    );
}