import React from 'react';
import { useDispatch } from 'react-redux';
import { changeApparence, changeConversation } from '../app/slices/conversationSlice';

const Contact = (userInfo) => {
    const dispatch = useDispatch()
    return (
        <a key={userInfo.userInfo.IdUser} onClick={() => { dispatch(changeApparence()); dispatch(changeConversation(userInfo.userInfo.IdUser)) }} className='flex flex-row py-2 items-center px-2 hover:bg-neutral-500 cursor-pointer'>
            <div className='relative'>
                <img className='w-16 h-16 mr-4 rounded-full' src="/images/noImage.jpg" alt="" srcSet="" />
                <div style={{ boxShadow: userInfo.userInfo.etat ? "rgb(59, 219, 10) 0px 54px 55px, rgb(59, 219, 10) 0px -1px 2px, rgb(59, 219, 10) 0px 0px 0px, rgb(59, 219, 10) 0px 1px 3px, rgb(59, 219, 10) 0px -1px 3px" : "red 0px 54px 55px, red 0px -1px 2px, red 0px 0px 0px, red 0px 1px 3px, red 0px -1px 3px", backgroundColor: userInfo.userInfo.etat ? "rgb(59, 219, 10)" : "red" }} className='w-2.5 h-2.5 rounded-full absolute top-2 right-4 z-30'></div>
            </div>
            <div className='flex flex-col'>
                <h2 className='text-md font-semibold'>{userInfo.userInfo.userName}</h2>
                <p className='text-sm font-medium text-white'>vous: Hello word </p>
            </div>
        </a>
    );
}
export default Contact;