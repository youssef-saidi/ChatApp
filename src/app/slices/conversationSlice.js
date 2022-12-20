import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  apparence: true,
  users: [],
  activeConversation: {},
};
export const conversationSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    changeApparence: (state) => {
      state.apparence = false;
    },
    changeConversation: (state, action) => {
      const activeConv = state.users.filter(
        (item) => item.IdUser === action.payload
      );
      state.activeConversation = activeConv[0];
    },
    setUser: (state, action) => {
      state.users=action.payload ;
      state.activeConversation =action.payload[0] ;

    },
  },
});
export const { changeApparence, changeConversation ,setUser} =
  conversationSlice.actions;
export default conversationSlice.reducer;
