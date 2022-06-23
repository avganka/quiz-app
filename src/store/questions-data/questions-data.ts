import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Category, Question } from '../../types/questions';

type QuestionsData = {
  categories: Category[],
  questions: Question[],
}

const initialState: QuestionsData = {
  categories: [],
  questions: [],
};

const questionsData = createSlice({
  name: 'questionsData',
  initialState,
  reducers: {
    fetchCategories(state, action: PayloadAction<Category[]>) {
      state.categories = action.payload;
    },
    fetchQuestions(state, action: PayloadAction<Category[]>) {
      state.categories = action.payload;
    },
  },
});


export default questionsData;
export const {fetchCategories, fetchQuestions} = questionsData.actions;
