import { configureStore } from "@reduxjs/toolkit";
import appSlice from '../features/AppSilce'

const store = configureStore({
  reducer: {
    app: appSlice
  }
})

export default store