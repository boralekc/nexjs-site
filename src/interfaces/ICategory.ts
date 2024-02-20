export interface ICategory {
    id_category?: number | string;
    name: string;
    articles: any[]
}

export interface ICategories {
    categories: ICategory[]
}

export interface IAddCategory {
    name: string;
}