import { createSlice, createAsyncThunk, isAnyOf } from "@reduxjs/toolkit";
import { STATUSES } from "./status";

export const fetchYear = createAsyncThunk("fetchYear/alumni", async (cred) => {
  const data = await fetch(
    `https://script.google.com/macros/s/AKfycbzOkDBaKF02LTmdYLn4yCZKUvlHuUOa_OB_op5Ni6aJ51eRL9o_CNNuyKpRU6eNaO-9/exec`
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
