export class NewsItem {
    title: string | undefined;
    link: string | undefined;
    keywords: string[] | undefined | null;
    creator: string[] | undefined | null;
    video_url: string | undefined |null;
    description: string | undefined;
    content: string | undefined | null;
    pubDate: string | Date | undefined;
    image_url: string | undefined | null;
    source_id: string | undefined;
    country: string[] = [];
    category: string[] = [];
    language: string | undefined;
}