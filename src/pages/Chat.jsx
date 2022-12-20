import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import NoConversation from '../components/NoConversation';
import Contacts from './Contacts';
import Conversation from './Conversation';
import Cache from '../Storage/Storage';
import { setUser } from '../app/slices/conversationSlice';
import axios from 'axios';

const Chat = () => {
    const conversationApparence = useSelector((state) => state.conversation.apparence)
    const loggedin = useSelector((state) => state.isLoggin.value)
    const users = useSelector((state) => state.conversation.users)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    console.log(Cache.get("userId"))
    const fetchData = () => {
        return axios
        .post(`http://localhost:22551/ChatApp-war/GetFriends?id=${Cache.get("userId")}`)
        .then((response) => {
     console.log(response.data)
          if (response.data!="") {
            dispatch(setUser(response.data))
            console.log(users)


              
        //     return navigate("/");
          }else{
              
            //   errors = { ...errors, error: "Your Username Or password is Incorrect" };
              return console.log("Your Username Or password is Incorrect" );
          }
        })
        .catch((error) => {
      
          console.log(error)
     
        });
      }
    useEffect(() => {
        if (!loggedin) navigate("/login")
        fetchData()

    }, [loggedin])

    return (
        <div className=' h-screen w-screen overflow-hidden'>
            <Navbar />

            <div className='flex flex-row h-full'>
                <div className='flex flex-row relative h-full rounded-tl-4xl w-screen'>
                    <div className='md:w-1/4 w-screen'>
                        <Contacts />
                    </div>
                    <div className='md:w-3/4 md:block hidden'>
                        {conversationApparence &&
                            <NoConversation />
                        }
                        <Conversation />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Chat;