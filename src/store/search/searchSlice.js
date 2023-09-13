import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    data: [],
    loading: false,
    error: null,
  };

export const fetchSearch = createAsyncThunk(
    "async/fetchBook",
    async ({search, category, sorting}, thunkAPI) => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${search}+${category}+orderBy=${sorting}&key=AIzaSyBzF_erF-tnOmbaWVR6Gj7fdGFPL7Vhd3I`
        );
        const data = await response.json();
        return data;
      } catch (error) {
        throw error;
      }
    }
  );



  const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchSearch.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchSearch.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload;
        })
        .addCase(fetchSearch.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
    },
  });
  
  export default searchSlice.reducer;