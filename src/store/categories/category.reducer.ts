import { AnyAction } from "redux";
import {  fetchCategoriesFailed, fetchCategoriesSuccess, fetchCategoriesStart } from './category.action';
import {  Category } from './category.types';

export type CategoryState = {
  readonly categories: Category[],
  readonly isLoading : boolean,
  readonly error: Error | null;
}



export const CATEGORIES_INITIAL_STATE : CategoryState = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action : AnyAction
): CategoryState => {

  if(fetchCategoriesStart.match(action)){
    return { ...state, isLoading: true };
  }

  if(fetchCategoriesSuccess.match(action)){
    return {...state, categories: action.payload, isLoading: false};
  }

  if(fetchCategoriesFailed.match(action)){
    return { ...state, error: action.payload, isLoading: false };
  }
  
    return state;
  }
