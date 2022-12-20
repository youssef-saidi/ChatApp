import { createSlice } from '@reduxjs/toolkit'
import Cache from "../../Storage/Storage";


const initialState = {
  value: false,
}

export const logSlice = createSlice({
  name: 'log',
  initialState,
  reducers: {
    logIn: (state) => {
      state.value = true
  },
    logOut: (state) => {
      state.value = false
      Cache.deleteStorage('userId')
  },
  },
})


export const { logIn, logOut } = logSlice.actions;
export default logSlice.reducer