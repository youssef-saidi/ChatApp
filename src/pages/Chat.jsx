import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import NoConversation from '../components/NoConversation';
import Contacts from './Contacts';
import Conversation from './Conversation';

const Chat = () => {
    const conversationApparence = useSelector((state) => state.conversation.apparence)
    const loggedin = useSelector((state) => state.isLoggin.value)
    const navigate = useNavigate()
    useEffect(() => {
        // if (!loggedin) navigate("/login")

    }, [])

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