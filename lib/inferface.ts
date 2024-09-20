import { Any } from "next-sanity";

export interface simpleBlogCard {
    title: string;
    currentSlug: string;
    smallDescription: string;
    titleImage: any;
}

export interface fullBlog {
    currentSlug: string;
    title: string;
    content: any;
    titleImage: any;
}