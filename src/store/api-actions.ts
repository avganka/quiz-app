import { Action, ThunkAction } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { fetchCategories, fetchQuestions } from './questions-data/questions-data';
import { RootState } from './root-reducer';

export const fetchCategoriesAction = (packId: string): ThunkAction<Promise<void>, RootState, AxiosInstance, Action> =>
  async (dispatch, _getState, api) => {
    const { data } = await api.get('categories');
    dispatch(fetchCategories(data));
  };

export const fetchQuestionsAction = (categoryId: string): ThunkAction<Promise<void>, RootState, AxiosInstance, Action> =>
  async (dispatch, _getState, api) => {
    const { data } = await api.get(`questions?categoryId=${categoryId}`);
    dispatch(fetchQuestions(data));
  };
