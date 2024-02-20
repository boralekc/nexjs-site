export interface IArticle {
    id_article?: number | string;
    title: string;
    content: string;
    id_category?: string | number | null;
}