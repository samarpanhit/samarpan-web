import { createSlice, createAsyncThunk, isAnyOf } from "@reduxjs/toolkit";
import { STATUSES } from "./status";

export const fetchYear = createAsyncThunk("fetchYear/alumni", async (cred) => {
  const data = await fetch(
    `https://script.google.com/macros/s/AKfycby209Fs5VDGKfokdoXFBUm1PwqtZ4BmihGF3VsSGQqGYWQPQQZn-PSZjaNXD3S2HZ3i/exec`
    );
  const result = await data.json();
  return result.data;
});

const initialState = {
  year: [],
  member: [],
  status: STATUSES.IDLE,
};
export const alumniSlice = createSlice({
  name: "event",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchYear.fulfilled, (state, action) => {
        state.year = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchYear.pending,
        (state, action) => {
          state.status = STATUSES.LOADING;
        }
      );
  },
});

export default alumniSlice.reducer;
