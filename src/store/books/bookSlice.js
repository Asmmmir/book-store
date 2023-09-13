import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchAsyncData = createAsyncThunk(
  "async/fetchBook",
  async (payload, thunkAPI) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=react&startIndex=0&maxResults=30&key=AIzaSyBzF_erF-tnOmbaWVR6Gj7fdGFPL7Vhd3I`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
);


const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAsyncData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload
      })
      .addCase(fetchAsyncData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  },
});

export default booksSlice.reducer;
