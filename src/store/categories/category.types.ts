export enum CATEGORIES_ACTION_TYPES  {
    FETCH_CATEGORIES_START = 'category/FETCH_CATEGORIES_START',
    FETCH_CATEGORIES_SUCCESS = 'category/FETCH_CATEGORIES_SUCCESS',
    FETCH_CATEGORIES_FAILED = 'category/FETCH_CATEGORIES_FAILED',
  };

  export type categoryItem = {
    id:number,
    price:number,
    imageUrl:string,
    name:string;
  }

  export type Category = {
    imageUrl:string,
    title:string,
    items:categoryItem[]
  }

  export type CategoryMap = {
    [key : string] : categoryItem[]
  }
