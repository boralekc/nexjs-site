export interface IArticle {
    id_article: number;
    title: string;
    content: string;
    id_category: number;
}

export interface IArticleData {
    articles: IArticle[]
}

export interface IArticleDataSingle {
    article: IArticle
}