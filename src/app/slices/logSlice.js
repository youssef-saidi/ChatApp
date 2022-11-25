import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  value: true,
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
  },
  },
})


export const { logIn, logOut } = logSlice.actions;
export default logSlice.reducer