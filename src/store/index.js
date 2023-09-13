import { configureStore } from '@reduxjs/toolkit';
import booksSlice from './books/bookSlice';
import descriptionSlice from './books/descriptionSlice';
import searchSlice from './search/searchSlice';

const store = configureStore({
  reducer: {
    async: booksSlice,
    description: descriptionSlice,
    search: searchSlice
  },
});

export default store;