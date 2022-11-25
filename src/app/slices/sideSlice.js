import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    apparence: true,
}

export const sideSlice = createSlice({
    name: 'side',
    initialState,
    reducers: {
        changeApparence: (state) => {
            state.apparence = !state.apparence;
        }
    },
})

export const { changeApparence } = sideSlice.actions;
export default sideSlice.reducer