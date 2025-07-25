import { configureStore } from '@reduxjs/toolkit'
import filmDeerReducer from "./filmDeerSlice"

export const store = configureStore({
  reducer: {
    filmDeerData : filmDeerReducer
  },
})
