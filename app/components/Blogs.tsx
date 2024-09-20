import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { simpleBlogCard } from "@/lib/inferface";
import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 30;

async function getData() {
  const query = `*[_type == 'blog'] | order(_createdAt desc) {
    title,
        smallDescription,
        'currentSlug': slug.current,
        titleImage,
    }`;

  const data = await client.fetch(query);
  return data;
}

export default async function Blogs() {
  const data: simpleBlogCard[] = await getData();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-4 gap-7 md:grid-cols-2 mt-14">
      {data.map((blog, idx) => (
        <Card className="mt-7" key={idx}>
          <Image
            src={urlFor(blog.titleImage).url()}
            alt="Blog Image"
            width={500}
            height={500}
            className="rounded-t-lg object-cover h-[200px]"
          />
          <CardContent className="mt-5">
            <h3 className="text-xl font-semibold leading-7 tracking-tighter">
              {blog.title}
            </h3>
            <p className="mt-3 tracking-tight leading-tight text-gray-500 line-clamp-3">
              {blog.smallDescription}
            </p>
            <Button asChild className="w-full mt-7">
              <Link href={`/blog/${blog.currentSlug}`}>Read More</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
      {data.map((blog, idx) => (
        <Card className="mt-7" key={idx}>
          <Image
            src={urlFor(blog.titleImage).url()}
            alt="Blog Image"
            width={500}
            height={500}
            className="rounded-t-lg object-cover h-[200px]"
          />
          <CardContent className="mt-5 flex flex-col">
            <h3 className="text-xl font-semibold leading-7 tracking-tighter">
              {blog.title}
            </h3>
            <p className="mt-3 tracking-tight leading-tight text-gray-500 line-clamp-3">
              {blog.smallDescription}
            </p>
            <Button asChild className="w-full mt-7">
              <Link href={`/blog/${blog.currentSlug}`}>Read More</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
