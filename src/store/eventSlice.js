import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import {STATUSES} from './status'


export const fetchEvent = createAsyncThunk('fetch/event', async (cred) => {
  console.log("event called");
    const data = await fetch(`https://script.google.com/macros/s/AKfycbzDoAKssNY1qVOIM262kKP0q30Jy9x0J1vOnW9So8Xvvas6hVVDmg36hIZBzoaVFnrL5w/exec`);
    const result = await data.json();
    return result;

})


const initialState = {
    data:[],
    status: STATUSES.IDLE,
  }
export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
    builder
        .addCase(fetchEvent.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
        .addCase(fetchEvent.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })

  }
})


export default eventSlice.reducer