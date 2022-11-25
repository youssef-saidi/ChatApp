import React from 'react';
import { useSelector } from 'react-redux';
import Contact from '../components/Contact';

const Contacts = () => {
    const users = useSelector((state) => state.conversation.users)
    const userContact = users.map((item,key) => {
        return(
            <Contact index={key} userInfo={item} />
        )
    });
    return (
        <div  className='h-full pt-2  rounded-tl-4xl pt-6'>
            <div className='relative px-4 pb-3'>
                <input placeholder='Search...' className='border border-slate-500 rounded w-full h-11 pl-3 pr-9' type="text" />
                <img className='absolute top-3 right-8 w-6 h-6' src="/images/searchIcon.png" alt="" srcSet="" />
            </div>
            <div className='divide-y overflow-y-scroll h-full pb-32 md:pb-28 px-2'>
                {userContact}
            </div>
        </div>
    );
}
export default Contacts;