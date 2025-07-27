import { configureStore } from '@reduxjs/toolkit'
import filmDeerReducer from "./filmDeerSlice.jsx"

export const store = configureStore({
  reducer: {
    filmDeerData : filmDeerReducer
  },
})
