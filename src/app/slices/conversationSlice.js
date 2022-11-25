import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  apparence: true,
  activeConversation: {
    IdUser: 1,
    userName: "Youssef saidi",
    imgUser: "/images/noImage.jpg",
    etat:true,
    room:"room1"
  },
  users: [
    {
      IdUser: 1,
      userName: "Youssef saidi",
      imgUser: "/images/noImage.jpg",
      etat:true,
      room:"room1"
    },
    {
      IdUser: 2,
      userName: "Saidi Youssef",
      imgUser: "/images/userIm.png",
      etat:false,
      room:"room2"
    },
    {
      IdUser: 3,
      userName: "Youssef saidi",
      imgUser: "/images/noImage.jpg",
      etat:false,
      room:"room3"
    },
    {
      IdUser: 4,
      userName: "Saidi Youssef",
      imgUser: "/images/userIm.png",
      etat:false,
      room:"room4"
    },
    {
      IdUser: 5,
      userName: "Youssef saidi",
      imgUser: "/images/noImage.jpg",
      etat:true,
      room:"room5"
    },
    {
      IdUser: 6,
      userName: "Saidi Youssef",
      imgUser: "/images/userIm.png",
      etat:true
    },
    {
      IdUser: 7,
      userName: "Youssef saidi",
      imgUser: "/images/noImage.jpg",
      etat:true
    },
    {
      IdUser: 8,
      userName: "Saidi Youssef",
      imgUser: "/images/userIm.png",
      etat:false
    },
    {
      IdUser: 9,
      userName: "Youssef saidi",
      imgUser: "/images/noImage.jpg",
      etat:false
    },
    {
      IdUser: 10,
      userName: "Saidi Youssef",
      imgUser: "/images/userIm.png",
      etat:false
    },
    {
      IdUser: 11,
      userName: "Youssef saidi",
      imgUser: "/images/noImage.jpg",
      etat:true
    },
    {
      IdUser: 12,
      userName: "Saidi Youssef",
      imgUser: "/images/userIm.png",
      etat:true
    }
  ]
}
export const conversationSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeApparence: (state) => {
      state.apparence = false
    },
    changeConversation: (state, action) => {
      const activeConv = state.users.filter(item => item.IdUser === action.payload)
      state.activeConversation = activeConv[0]
      }
  },
})
export const { changeApparence, changeConversation } = conversationSlice.actions
export default conversationSlice.reducer