export interface IArticle {
    id_article?: number | string;
    title: string;
    content: string;
    id_category?: number | string;
}

export interface IArticleData {
    articles: IArticle[]
}

export interface IArticleDataSingle {
    article: IArticle
}