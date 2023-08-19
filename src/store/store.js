import { configureStore } from '@reduxjs/toolkit'
import eventReducers from './eventSlice'
import alumniReducers from './alumniSlice'

export const store = configureStore({
  reducer: {
    event: eventReducers,
    alumni: alumniReducers,
  },
})