
export interface ICategory {
    id_category: number;
    name: string;
}

export interface ICategories {
    categories: ICategory[]
}

export interface IAddCategory {
    name: string;
}