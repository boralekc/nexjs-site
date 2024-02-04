
export interface ICategory {
    id_category: number | string;
    name: string;
}

export interface ICategories {
    categories: ICategory[]
}

export interface IAddCategory {
    name: string;
}