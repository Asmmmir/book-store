import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
  book: [],
};


export const fetchBook = createAsyncThunk(
    "async/fetchBook",
    async (payload, thunkAPI) => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes/${payload}`
        );
        const data = await response.json();
        return data;
      } catch (error) {
        throw error;
      }
    }
  );



  const descriptionSlice = createSlice({
    name: "description",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchBook.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchBook.fulfilled, (state, action) => {
          state.loading = false;
          state.book = action.payload;
        })
        .addCase(fetchBook.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
    },
  });
  
  export default descriptionSlice.reducer;
  