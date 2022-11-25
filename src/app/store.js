import { configureStore } from '@reduxjs/toolkit'
import logSliceReducer from './slices/logSlice'
import  sideReducer  from './slices/sideSlice'
import conversationReducer from './slices/conversationSlice'




export const store =configureStore({
    reducer: {
      isLoggin: logSliceReducer,
      sideBar: sideReducer,
      conversation: conversationReducer,
    },
  })
